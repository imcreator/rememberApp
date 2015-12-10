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
      .otherwise({
        redirectTo: '/'
      });
  });
