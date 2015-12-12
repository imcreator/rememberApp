'use strict';

/**
 * @ngdoc overview
 * @name rememberAppApp
 * @description
 * # rememberAppApp
 *
 * Main module of the application.
 */
angular
  .module('rememberApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/play', {
        templateUrl: 'views/play.html',
        controller: 'PlayCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .factory('wordService', function($http) {
   var words = {};

   (function(){
     $http.get('../data/words.json').then(function(response) {
        words.database = response.data;
     });
   })();

   function set(num) {
    words.num = num;
   }

   function get() {
    return words.num;
   }

   function getWords() {
      return words.database;
    }

    function draw(table) {
      for (var i = 0; i < table.length; i++) {
          var j = Math.floor(Math.random() * table.length);
          var temp = table[i];
          table[i] = table[j];
          table[j] = temp;
      }
      return table;
    }

   return {
      set: set,
      get: get,
      getWords: getWords,
      draw: draw

   };
  });
