const express = require("express");
const path = require("path");
const farmerController = require("../controllers/farmer");
const model = require("../models/model");
const nodemailer = require("nodemailer");
var cloudinary = require('cloudinary');
cloudinary.config({ 
  cloud_name: 'doy4c92gs', 
  api_key: '998421236999856', 
  api_secret: 'knil1lpoUQZlz7e4l_iHm6nOVxo' 
});

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "thedecoits@gmail.com",
    pass: "c304@jmiT"
  }
});

const router = express.Router();

router.get("/", farmerController.getMainPage);

router.get("/detectpest", function(req, res) {
  res.render("detectpest");
});

router.get("/feedback", farmerController.getFeedback);

router.get("/links", farmerController.getLinks);

router.get("/credits", farmerController.getCredits);

router.get("/chat", farmerController.getChatBot);

router.get("/location", function(req,res,next) {
  res.render('location');
});

router.get("/howTOuse", farmerController.getHowToUse);

router.get("/associatewithus", farmerController.getAssociateWithUs);

router.get("/faqs", farmerController.getFaq);

router.post("/getinfo", function(req,res,next) {
  model.getPestByName(req.body.name, function(pests) {
    res.send(pests);
  })
});

router.post("/upload", function(req, res, next) {
  cloudinary.v2.uploader.upload(req.body.image, 
    function(error, result) {
      if(error)
        throw error
      res.send({
        result
      })
    });
});

router.post("/detectpest", function(req, res, next) {
  var pestFiltered = [];

  var affectedArea = "";
  var discoloration = "";
  var holes = "";
  var state = req.body.state;
  var soil = req.body.soil;
  var season = req.body.season;
  var crop = req.body.crop;
  var area = req.body.affectedArea;
  if (area == "stem") affectedArea = "";
  else if (area == "discoloration") {
    affectedArea = "leaf";
    discoloration = "yes";
  } else if (area == "leafcenter") {
    affectedArea = "leaf";
    holesAt = "center";
  } else if (area == "leafedges") {
    affectedArea = "leaf";
    holesAt = "center";
  }

  model.getRegionByStateName(state, function(err, region) {
    model.questionnaire(
      crop,
      soil,
      season,
      affectedArea,
      holesAt,
      discoloration,
      region,
      function(err, pests) {
        console.log(pests);
      }
    );
  });
});

router.get("/documentation", function(req, res, next) {
  var pestFiltered = [];
  var cropsFiltered = [];
  model.getPestsByCropName("Grass", function(err, pests) {
    pestFiltered = pests;
  });
  model.getCrops("", function(err, crops) {
    cropsFiltered = crops;

    res.render("documentation", { pests: pestFiltered, crops: cropsFiltered });
  });
});

router.get("/documentation/:name", function(req, res, next) {
  var cropname = req.params.name;
  var pestFiltered = [];
  var cropsFiltered = [];
  model.getPestsByCropName(cropname, function(err, pests) {
    pestFiltered = pests;
  });
  model.getCrops("", function(err, crops) {
    cropsFiltered = crops;

    res.render("documentation", { pests: pestFiltered, crops: cropsFiltered });
  });
});

router.get("/documentation/pest/:id", function(req, res, next) {
  var id = req.params.id;
  var pestFiltered = [];
  model.getPestById(id, function(err, pests) {
    pestFiltered = pests;
    console.log(pestFiltered);
    res.render("docsingle", { pests: pestFiltered });
  });
});

router.post("/feedback", function(req, res) {
  var fullname = req.body.fullname;
  var season = req.body.season;
  var state = req.body.state;
  var soil = req.body.soil;
  var crop = req.body.crop;
  var pest = req.body.pest;
  var email = req.body.email;
  var phone = req.body.phone;
  var desc = req.body.desc;

  console.log(email);

  let mailOptions = {
    from: '"ICAR Feedback" <feedback@icar.com>',
    to: "sushant030898@gmail.com",
    subject: "Feedback form recieved", // Subject line
    text: "", // plain text body
    html:
      "The details of the person are<br><b>Fullname: </b>" +
      fullname +
      "<br><b>Season: </b>" +
      season +
      "<br><b>State: </b>" +
      state +
      "<br><b>Soil: </b>" +
      soil +
      "<br><b>Crop: </b>" +
      crop +
      "<br><b>Pest: </b>" +
      pest +
      "<br><b>Email: </b>" +
      email +
      "<br><b>Phone: </b>" +
      phone +
      "<br><b>Description: </b>" +
      desc
  };

  transporter.sendMail(mailOptions);
});

router.post("/associatewithus", function(req, res) {
  var name = req.body.name;
  var email = req.body.email;
  var contact = req.body.contact;
  var check3 = req.body.check3;

  console.log(email);

  let mailOptions1 = {
    from: '"ICAR" <no-reply@icar.com>', // sender address
    to: email, // list of receivers
    subject: "Welcome to Seheyogi", // Subject line
    text: "", // plain text body
    html:
      "We have recieved a request from you to be associated with us. We will contact you in 24 hours<b>With love,<br> Seheyogi</b>" // html body
  };

  let mailOptionsICAR = {
    from: email,
    to: "sushant030898@gmail.com",
    subject: "Request for association", // Subject line
    text: "", // plain text body
    html:
      "The details of the person are<br><b>Name: </b>" +
      name +
      "<br><b>E-mail: </b>" +
      email +
      "<br><b>Contact Info: </b>" +
      contact +
      "<br><b>Profession: </b>" +
      check3
  };

  // send mail with defined transport object
  let info1 = transporter.sendMail(mailOptions1);
  let info2 = transporter.sendMail(mailOptionsICAR);

  console.log("Message sent: %s", info1.messageId);
  console.log("Message sent: %s", info2.messageId);
  setTimeout(res.render("associate"), 5000); //Add await
});

router.post("/chat", farmerController.getChatBotResponse);

module.exports = router;
