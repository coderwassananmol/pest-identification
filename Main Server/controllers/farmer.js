const mainDir = require("../util/mainpath");
const path = require("path");
const chatbot = require("./chatbotController");

exports.getMainPage = (req,res,next)=>{
    res.render('home');
}
exports.getAssociateWithUs = (req,res,next)=>{
    res.render('associate');
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
exports.getChatBot = (req, res, next) => {
  chatbot.runBot("umeed-d5fe3", "hello", function(response) {
    res.render("chatbot",{response: response});
  });
};
exports.getChatBotResponse = (req, res, next) => {
  chatbot.runBot("umeed-d5fe3", req.body.data, function(response) {
    res.send({response: response});
  });
};