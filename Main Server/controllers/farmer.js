const mainDir = require('../util/mainpath');
const path = require('path');

exports.getMainPage = (req,res,next)=>{
    res.render('homepage');
}
exports.getAssociateWithUs = (req,res,next)=>{
    res.render('associateWITHus');
}
exports.getCredits = (req,res,next)=>{
    res.render('credits');
}
exports.getDocumentation = (req,res,next)=>{
    res.render('documentation');
}
exports.getFaq = (req,res,next)=>{
    res.render('faqs');
}
exports.getFeedback = (req,res,next)=>{
    res.render('feedback');
}

exports.getHowToUse = (req,res,next)=>{
    res.sendFile(path.join(mainDir,'views','howTOuse.html'));
}
exports.getLinks = (req,res,next)=>{
    res.render('links');
}
exports.getQuestionPage = (req,res,next)=>{
    res.sendFile(path.join(mainDir,'views','questionpage.html'));
}
