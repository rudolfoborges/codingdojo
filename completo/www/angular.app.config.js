(function(){
	'use strict';

	angular
		.module('solutis.codingdojo', ['ui.router', 'solutis.codingdojo.controllers'])
		.constant('API', {
			BASE_URL: '/api/v1/'
		})
		.config(config);

	function config($locationProvider){
		$locationProvider.html5Mode(false).hashPrefix('!');
	}

})();