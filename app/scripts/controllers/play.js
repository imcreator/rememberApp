'use strict';

angular.module('rememberApp')
  .controller('PlayCtrl', ['$scope', 'wordService', '$interval', function ($scope, wordService, $interval) {
 	$scope.words = wordService.draw(wordService.getWords().slice(0, wordService.get()));
 	$scope.currentWord = 0;
  	$scope.getName = function() {
  		return $scope.words[$scope.currentWord].name;
  	};

  	$scope.getSrc = function() {
  		return $scope.words[$scope.currentWord].src;
  	};
  	$scope.next = function() {
  		$scope.currentWord++;
  	};
  	$scope.prev = function() {
  		$scope.currentWord--;
  	};

  	$scope.seconds = '00';
  	$scope.minutes = '00';
  	$interval(function clock() {
  		if( $scope.seconds < 9 ) {
  			$scope.seconds++;
  			$scope.seconds = '0' + $scope.seconds;
  		} else {
  			$scope.seconds ++;
  		}

  		if( $scope.seconds > 59 ) {
  			$scope.seconds = '00';
  			$scope.minutes++;
  			if( $scope.minutes < 9 ) {
  				$scope.minutes = '0' + $scope.minutes;
  			} else {
  				$scope.minutes++;
  			}
  		}

  	}, 1000);
    $scope.test = false;
    $scope.changeState = function() {
      $scope.currentWord = 0;
      $scope.test = !$scope.test;
    };

    $scope.success = false;

    $scope.wordsTest = [];
    $scope.checkWord = function() {
      var currWord = $scope.words[$scope.currentWord];
      if( currWord.name.toLowerCase() === $scope.testInput.toLowerCase() ) {
        $scope.wordsTest.push(currWord);
        $scope.testInput = '';
        $scope.currentWord++;
      } else {
        $scope.theEnd = true;
      }
    };
  }]);
