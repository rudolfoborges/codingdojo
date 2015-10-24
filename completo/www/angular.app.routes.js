(function(){
	'use strict';

	angular
		.module('solutis.codingdojo')
		.config(routes);

	function routes($stateProvider, $urlRouterProvider){
		$urlRouterProvider.otherwise('/participantes');


		$stateProvider
			.state('participantes', {
		      	url: "/participantes",
	        	templateUrl: "templates/participantes.html",
	        	controller: 'ParticipanteController as ctrl'
			})

			.state('sorteio', {
		      	url: "/sorteio",
	        	templateUrl: "templates/sorteio.html",
	        	controller: 'SorteioController as ctrl'
			});

		
	}

})();