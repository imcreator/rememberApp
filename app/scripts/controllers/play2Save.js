'use strict';

angular.module('rememberApp')
  .controller('PlayCtrl', ['$scope','wordBase', function ($scope, wordBase) {
  	$scope.words = [];
  	$scope.currentWord = 0;
  	$scope.example = wordBase;
  	$scope.getName = function() {
  		return $scope.words[$scope.currentWord].name;
  	};

  	$scope.getSrc = function() {
  		return $scope.words[$scope.currentWord].src;
  	};
  	$scope.next = function() {
  		$scope.currentWord++;
  		console.log($scope.currentWord);
  		console.log($scope.words.length);
  		console.log($scope.words.length === $scope.currentWord);
  	};
  	$scope.prev = function() {
  		$scope.currentWord--;
  		console.log($scope.currentWord);
  	};
    $scope.test = false;
    $scope.changeState = function() {
      $scope.currentWord = 0;
      $scope.test = !$scope.test;
    };

    $scope.success = false;

    $scope.wordsTest = [];
    $scope.checkWord = function(input) {
      var currWord = $scope.words[$scope.currentWord];
      if( currWord.name.toLowerCase() === input.toLowerCase() ) {
        $scope.wordsTest.push(currWord);
        $scope.testInput = '';
        $scope.currentWord++;
        $scope.$scope.words

      } else {
        $scope.theEnd = true;
      }
    };
  }]);
