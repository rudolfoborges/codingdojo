'use strict';

var express = require('express'),
   	App = require('./app/app').App,
    context = express();

var app = new App('Coding Dojo');

app.bootstrap(express, context, __dirname, listen);

function listen(){
	var port = process.env.PORT || 3000;
	context.listen(port, function() {
		console.log(app.name + " Listening on " + port);
	});
}
