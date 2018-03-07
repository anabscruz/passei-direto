var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');

module.exports = function(){
	var app = express();

	app.use(bodyParser.urlencoded({ extended: false }));
	app.use(bodyParser.json());

	app.set("view engine", "ejs");
    app.set("views","./views");

	consign().
		include('database').
		include('routes').
		into(app);

	

	return app;	
}
