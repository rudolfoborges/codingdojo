'use strict';

var express = require('express'),
	router = express.Router(),
	participanteController = require('./controllers/participante.controller'),
	sorteioController = require('./controllers/sorteio.controller');


router.route('/sorteio').get(sorteioController.selecionarParticipante);

router.route('/participante').get(participanteController.todos);


module.exports = router;
