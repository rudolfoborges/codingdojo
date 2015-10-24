'use strict';

var datasource = require('../datasource');

exports.selecionarParticipante = function(req, res){
	var participante = null;
	do{
		var id = Math.floor((Math.random() * datasource.size()));
		participante = datasource.findOne(id);
	} while(participante.sorteio !== 'sim')

	res.status(200).json(participante);
}