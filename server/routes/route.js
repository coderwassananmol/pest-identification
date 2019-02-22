var express = require("express");
const router = express.Router();
var model = require("../models/model");

router.get('/',function(req,res){
	res.json({value: "key"});
});

//Docs when no crop is selected
router.get('/documentation',function(req,res){
	var docsJSON = {};
	model.getPestsByCropName("Grass", function(err, pests) {
		//pestFiltered would be an array of JSONs
		docsJSON['pestFiltered'] = pests;
	});
	model.getCrops('', function(err,crops){
		//array of JSONs
		docsJSON['totalCrops'] = crops;
		res.json(docsJSON);
	});
});

//Docs when crop is clicked
router.get('/documentation/:cropname',function(req,res){
	var cropname = req.params.cropname;
	var docsJSON = {};
	model.getPestsByCropName(cropname, function(err, pests) {
		//pestFiltered would be an array of JSONs
		docsJSON['pestFiltered'] = pests;
	});
	model.getCrops('', function(err,crops){
		//array of JSONs
		docsJSON['totalCrops'] = crops;
		res.json(docsJSON);
	});
});

// router.get('/feedback',function(req,res){
// 	res.json({value: "key"});
// });

// router.get('/pestdetect',function(req,res){
// 	res.json({value: "key"});
// });

//Questionnaire
router.get('/detectpest', function(req,res){
	state = req.query.state;
	model.getRegionByStateName(state, function(err, region){
		res.json(region);
	});
})

module.exports = router;
