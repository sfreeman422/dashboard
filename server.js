var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var logger = require('morgan');
var methodOverride = require('method-override');

var app = express();
var PORT = process.env.PORT  || 3000;

mongoose.connect("mongodb://localhost:27017/dashboard");

var db = mongoose.connection;

db.on("open", function(){
	console.log("Connected to MongoDB!");
});

db.on('error', function(err){
	console.log("An error has occurred: "+err);
});

app.use(logger('dev'));
app.use(bodyParser());
app.use(express.static('./public'));
app.use(methodOverride("_method"));

app.get("/", function(req, res){
	res.sendFile("./public/index.html");
});

app.listen(PORT);