(function(){
	'use strict';

	angular
		.module('solutis.codingdojo.controllers')
		.controller('SorteioController', controller);


	function controller($rootScope, $scope, $http, API){
		var ctrl = this;

		ctrl.participantes = [];
		ctrl.display = {};

		ctrl._init = function(){
			$rootScope.showBtn = false;
			$http.get(API.BASE_URL + 'participante').then(
				function(res){
					ctrl.participantes = res.data;
				}
			);
		}

		ctrl._init();

		ctrl.selecionarParticipante = function(){

			$http.get(API.BASE_URL + 'sorteio').then(
				function(res){
					var ganhador = res.data;
					ctrl._atualizarDisplay(ganhador);
				}
			);
		}

		ctrl._atualizarDisplay = function(ganhador){
			var interval = setInterval(function(){
				var size = ctrl.participantes.length;
				var id = Math.floor((Math.random() * size));
				ctrl.display = ctrl.participantes[id];
				$scope.$apply();
			}, 50);

			setTimeout(function(){
				clearInterval(interval);
				ctrl.display = ganhador;
				$scope.$apply();
			}, 10000);
		}
	}	

})();