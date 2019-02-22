const express = require('express');

const path = require('path');
const mainDir = require('../util/mainpath');
const farmerController = require('../controllers/farmer');

const router = express.Router();

router.get('/',farmerController.getMainPage);

router.get('/questionaire',farmerController.getQuestionPage);

router.get('/feedback',farmerController.getFeedback);

router.get('/links',farmerController.getLinks);

router.get('/credits',farmerController.getCredits);

router.get('/howTOuse',farmerController.getHowToUse);

router.get('/associateWITHus',farmerController.getAssociateWithUs);

router.get('/documentation',farmerController.getDocumentation);

router.get('/faq',farmerController.getFaq);

module.exports = router; 
