'use strict';

/**
 * @ngdoc function
 * @name rememberAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the rememberAppApp
 */
angular.module('rememberApp')
 	.controller('MainCtrl', ['$scope', 'wordService', function($scope, wordService) {
 		$scope.numOfWords = 0;
 		$scope.setNumbers = function() {
 			wordService.set($scope.numOfWords);
 		};
 		$scope.number = wordService.get();
 		$scope.words = wordService.getWords();
 	}]);
