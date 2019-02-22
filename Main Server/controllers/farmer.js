const mainDir = require('../util/mainpath');
const path = require('path');

exports.getMainPage = (req,res,next)=>{
    res.render('homepage');
}
exports.getAssociateWithUs = (req,res,next)=>{
    res.render('associateWITHus');
}
exports.getCredits = (req,res,next)=>{
    res.sendFile(path.join(mainDir,'views','credits.html'));
}
exports.getDocumentation = (req,res,next)=>{
    res.sendFile(path.join(mainDir,'views','documentation.html'));
}
exports.getFaq = (req,res,next)=>{
    res.sendFile(path.join(mainDir,'views','faq.html'));
}
exports.getFeedback = (req,res,next)=>{
    res.sendFile(path.join(mainDir,'views','feedback.html'));
}

exports.getHowToUse = (req,res,next)=>{
    res.sendFile(path.join(mainDir,'views','howTOuse.html'));
}
exports.getLinks = (req,res,next)=>{
    res.sendFile(path.join(mainDir,'views','links.html'));
}
exports.getQuestionPage = (req,res,next)=>{
    res.sendFile(path.join(mainDir,'views','questionpage.html'));
}
