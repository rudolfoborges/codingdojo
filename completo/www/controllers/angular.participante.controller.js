(function(){
	'use strict';

	angular
		.module('solutis.codingdojo.controllers', [])
		.controller('ParticipanteController', controller);


	function controller($rootScope, $http, API){
		var ctrl = this;

		ctrl.participantes = [];

		ctrl._init = function(){
			$rootScope.showBtn = true;

			$http.get(API.BASE_URL + 'participante').then(
				function(res){
					ctrl.participantes = res.data;
				}
			);
		}

		ctrl._init();
	}

})();