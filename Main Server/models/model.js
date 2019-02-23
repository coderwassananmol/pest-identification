var mongoose = require ("mongoose");
const Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost:27017/seheyogi', {useNewUrlParser: true});


var pests = new Schema ({
    pestname: String,
    commonname: String,
    scientificname: String,
    desc: String,
    cure : String,
    cropsAffected: String,
    affectedArea: String,
    holesAt: String,
    discoloration: String,
    cure : String,
    images:[String],
    extlinks: [String],
})


var states = new Schema ({
    state : String,
    region : String,
})


var crops = new Schema ({
    crop : String,
    soil : ['Eluvial','Forest','Red','Marshi','Laterite'],
    region : ['WH','NP','Dessert','Costal','Mangroove','Deccan'],
    season : ['Kharif','Rabi','Zaid']
})

var Crops = mongoose.model('Crops', crops);
var Pests = mongoose.model('Pests', pests);
var States = mongoose.model('States', states);
module.exports.getPestsByCropName = function(cropname, callback){
	var query = {crop: cropname};
	Pests.findOne(query, callback);
};

module.exports = {Crops, Pests, States};

//Query Functions
module.exports.getPestsByCropName = function(cropname, callback){
	var query = {cropsAffected : cropname};
	Pests.find(query, callback);
};

module.exports.getCrops = function(crop, callback){
    var query = {crop : crop};
    var cropArr={};
    Crops.find({},callback);
};

module.exports.getRegionByStateName = function(state, callback){
    var query = {state : state};
    States.findOne(query, callback);
}