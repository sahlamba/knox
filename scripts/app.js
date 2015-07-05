/**
 *  Module: knox
 *
 * Description: Main app module
 */
'use strict';

var app = angular.module('knox', ['ngSanitize', 'ngRoute', 'ngAnimate', 'ui.bootstrap']);

app.config(['$locationProvider', '$routeProvider',
  function($locationProvider, $routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'home/home.html',
        controller: 'HomeController'
      })
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true).hashPrefix('!');

  }
]);

app.controller('MainController', ['$scope',
  function($scope) {
    $scope.title = 'Team KNOx IIT Roorkee';
  }
]);
