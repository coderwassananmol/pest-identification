const mongoose = require("mongoose");
const passport = require("passport");
const router = require("express").Router();
const auth = require("../auth");
const Users = mongoose.model("Users");

const model = require("../../models/model");

//POST new user route (optional, everyone has access)
router.post("/", auth.auth.optional, (req, res, next) => {
  const {
    body: { user }
  } = req;

  console.log(req.body);

  if (!user.email) {
    return res.status(422).json({
      errors: {
        email: "Email is empty."
      }
    });
  }

  if (!user.password) {
    return res.status(422).json({
      errors: {
        password: "Password is empty."
      }
    });
  }

  Users.findOne(
    {
      email: user.email
    },
    function(err, result) {
      if (result !== null) {
        return res.status(422).json({
          errors: {
            email: "Email is already present."
          }
        });
      } else {
        const finalUser = new Users(user);

        finalUser.setPassword(user.password);

        return finalUser
          .save()
          .then(() => res.json({ user: finalUser.toAuthJSON() }));
      }
    }
  );
});

//POST login route (optional, everyone has access)
router.post("/login", auth.auth.optional, (req, res, next) => {
  const {
    body: { user }
  } = req;

  if (!user.email) {
    res.send({
      email: "Email is required."
    });
  }

  if (!user.password) {
    res.send({
      password: "Password is required."
    });
    /*return res.status(422).json({
      errors: {
        password: "is required"
      }
    });*/
  }

  return passport.authenticate(
    "local",
    { session: false },
    (err, passportUser, info) => {
      if (err) {
        return next(err);
      }

      if (passportUser) {
        const user = passportUser;
        user.token = passportUser.generateJWT();
        localStorage.setItem('token', user.token);
        res.send({ user: user.toAuthJSON() });
      }

      res.send({
        password: "Password is wrong."
      });

      /*return res.status(422).json({
        errors: {
          password: "is wrong"
        }
      });*/
    }
  )(req, res, next);
});

//GET current route (required, only authenticated users have access)
router.get("/editpest", auth.auth.required, (req, res, next) => {
  const {
    payload: { id }
  } = req;

  return Users.findById(id).then(user => {
    if (!user) {
      res.redirect('localhost:3000/login');
    }

    model.getAllPests(function(err, pests) {
      if (err) return next(err);
      res.render("editpest", { pests: pests });
    });
  });
});

//GET current route (required, only authenticated users have access)
router.get("/addpest", auth.auth.required, (req, res, next) => {
  const {
    payload: { id }
  } = req;

  console.log(res);
  return Users.findById(id).then(user => {
    if (!user) {
      res.redirect('localhost:3000/login');
    }

    model.getAllPests(function(err, pests) {
      if (err) return next(err);
      res.render("addpest");
    });
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

module.exports = router;
