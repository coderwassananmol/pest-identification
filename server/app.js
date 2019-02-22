var express = require("express");
var mongoose = require("mongoose");
var bodyparser = require("body-parser");
var cors = require("cors");

var models = require("./models/model");
var route = require("./routes/route");

const app = express();

app.use(cors({credentials:true, origin:true}));

app.use('/',route);

app.listen(3000);
