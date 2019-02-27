const express = require('express');
const path = require('path');
const mainDir = require('../util/mainpath');
const farmerController = require('../controllers/farmer');
const model = require('../models/model');

const router = express.Router();

router.get('/',farmerController.getMainPage);

router.get('/questionaire',farmerController.getQuestionPage);

router.get('/feedback',farmerController.getFeedback);

router.get('/links',farmerController.getLinks);

router.get('/credits',farmerController.getCredits);

router.get('/howTOuse',farmerController.getHowToUse);

router.get('/associateWITHus',farmerController.getAssociateWithUs);

router.get('/documentation', function(req, res, next) {
  var pestFiltered = [];
  var cropsFiltered = [];
  model.getPestsByCropName("Grass", function(err, pests) {    
    pestFiltered = pests;
	});
	model.getCrops('', function(err,crops){
    cropsFiltered = crops;
    
    res.render('documentation', {'pests': pestFiltered, 'crops': cropsFiltered});
  });  
});

router.get('/documentation/:name', function(req, res, next) {
  var cropname = req.params.name;
  var pestFiltered = [];
  var cropsFiltered = [];
  model.getPestsByCropName(cropname, function(err, pests) {    
    pestFiltered = pests;
	});
	model.getCrops('', function(err,crops){
    cropsFiltered = crops;
    
    console.log(pestFiltered + "\n" +cropsFiltered);
    res.render('documentation', {'pests': pestFiltered, 'crops': cropsFiltered});
  });  
});

router.get('/documentation/:id', function(req, res, next) {
  var id = req.params.id;
  var pestFiltered;
  model.getPestbyId(id, function(err, pests) {    
    pestFiltered = pests;
    console.log(pestFiltered);
    res.render('docsingle', {'pests': pestFiltered});
  });
});

router.get('/faqs',farmerController.getFaq);

module.exports = router; 
