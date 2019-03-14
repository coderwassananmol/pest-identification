const express = require('express');
const model = require('../models/model');
const router = express.Router();
const path = require('path');
const jwt = require('express-jwt');
const sendotp = require("sendotp");
const sendOtp = new sendotp('264616AHBGgQHd44Uq5c72d8ba'); //TODO: Use venv for keys, phone number and mails
const phone = Number("7876862085"); //Enter the phone number here
const getTokenFromHeaders = (req) => {
    const { headers: { authorization } } = req;  
    if(authorization && authorization.split(' ')[0] === 'Token') {
      return authorization.split(' ')[1];
    }
    return null;
  };
  if (typeof localStorage === "undefined" || localStorage === null) {
    var LocalStorage = require('node-localstorage').LocalStorage;
    localStorage = new LocalStorage('./scratch');
  }

const getTokenFromParams = (req) => {
    return localStorage.getItem('token');
};

  const auth = {
    required: jwt({
      secret: 'secret',
      userProperty: 'payload',
      getToken: getTokenFromParams,
    }),
    optional: jwt({
      secret: 'secret',
      userProperty: 'payload',
      getToken: getTokenFromHeaders,
      credentialsRequired: false,
    }),
  };

//Temp get routes
router.get('/addpest', function(req,res){
    res.render('addpest');
});

//All routes needed
router.get('/login',function(req,res,next){
    res.sendFile(path.join(__dirname + '/../views/login.html'));
});

router.post('/login', function(req,res){
    res.sendFile(path.join(__dirname + '/../views/otp.html'));
    sendOtp.send(phone, "PRIIND", function (error, data) {
      console.log(data);
    });
    sendOtp.setOtpExpiry('90');
      //TODO: Add retry otp options
});


router.post('/verifyotp', function(req,res){
  var value = Number(req.body.otpnumber);
  console.log(value);
  sendOtp.verify(phone, value , function (error, data) {
      console.log(data); // data object with keys 'message' and 'type'
      if(data.type == 'success') {res.redirect('/editpest')};
      if(data.type == 'error') {res.redirect('/')};
  });
});

//Adding new pest
router.post('/addpest', function(req,res,next){
    //TODO: Update entry values in updates too
    var pestname = req.body.pestname;
    var scientificname = req.body.scientific;
    var desc = req.body.desc;
    var cure = req.body.cure;
    var cropAffected = req.body.cropsAffected;
    var affectedArea = req.body.affectedArea;
    var discoloration = req.body.discoloration;
    var holesAt = req.body.holesAt;
    var image = req.body.image;
    var mainimage = [];
    console.log(req.body);

    for(var i=0; i<req.body.pestname.length; i++)
    {
        if(image[i]!='') {
            mainimage[i] = pestname[i] + ".png";
        }
        else mainimage[i] = "noimage.png";
    }
    console.log(mainimage)

    // TODO : Add validations
    for(var i=0; i<req.body.pestname.length; i++){
        var newpest = new model.Pests({
            pestname: pestname[i],
            cropsAffected: cropAffected[i],
            scientificname: scientificname[i],
            desc: desc[i],
            cure : cure[i],
            discoloration : discoloration[i],
            affectedArea: affectedArea[i],
            holesAt: holesAt[i],
            cropsAffected: cropAffected[i],
            mainimage: mainimage[i],
        });

        model.createPest(newpest, function (err, pest) {
            if (err) return next(err);
            console.log("Pest added")
        });
    }
    res.redirect('/addpest')
});

router.get('/editpest/:id', function(req,res,next){
    var id = req.params.id;
    console.log(req.body);

    var name = req.body.pestname;
    var crop = req.body.cropAffected;
    var desc = req.body.desc;
    var image = req.body.image;

    var data = {
        pestname: name,
        cropAffected: crop,
        desc: desc,
        image: image,
    }

    model.updatePestById(id, data, function(err){
        if (err) return next(err);
        console.log("Pest record Updated");
    })
});

router.get('/editpest/delete/:id', function(req,res,next){
    var id = req.params.id;
    model.removePestsById(id, function (err) {
        if (err) return next(err);
        console.log("Pest Deleted");
    });
    //TODO : Add SweetAlerts & remove the need of relading & Settimeout should pass a func as args
    setTimeout(res.redirect('/editpest'),1000);
});

module.exports = {router, auth};