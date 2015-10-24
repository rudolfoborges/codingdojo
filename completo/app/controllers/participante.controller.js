'use strict';

var datasource = require('../datasource');

exports.todos = function(req, res){
	var participantes = datasource.findAll().sort(function(a,b){
		if(a.nome > b.nome) return 1;
		if(a.nome < b.nome) return -1;
		else return 0;
	});
	res.status(200).json(participantes);
}