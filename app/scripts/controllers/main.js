'use strict';

/**
 * @ngdoc function
 * @name rememberAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the rememberAppApp
 */
angular.module('rememberApp')
  .controller('MainCtrl', function ($scope) {
  	$scope.isvalid = true;
  	$scope.numOfWords = 0;
  	$scope.check = function() {
  		console.log('hgello');
  	}
  });
