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
        templateUrl: 'pages/home/home.html',
        controller: 'HomeController'
      })
      .when('/about', {
        templateUrl: 'pages/about/about.html',
        controller: 'AboutController'
      })
      .when('/baja', {
        templateUrl: 'pages/baja/baja.html',
        controller: 'BajaController'
      })
      .when('/sponsorship', {
        templateUrl: 'pages/spons/spons.html',
        controller: 'SponsController'
      })
      .when('/contact', {
        templateUrl: 'pages/contact/contact.html',
        controller: 'ContactController'
      })
      .when('/garage', {
        templateUrl: 'pages/history/history.html',
        controller: 'HistoryController'
      })
      .otherwise({
        redirectTo: '/'
      });

    // $locationProvider.html5Mode(true).hashPrefix('!');

  }
]);

app.controller('MainController', ['$scope', '$rootScope',
  function($scope, $rootScope) {
    $scope.title = 'Team KNOx IIT Roorkee';

    $rootScope.navObject = [{
      'index': 1,
      'text': 'About',
      'link': '#/about'
    }, {
      'index': 2,
      'text': 'BAJA',
      'link': '#/baja'
    }, {
      'index': 3,
      'text': 'Garage',
      'link': '#/garage'
    }, {
      'index': 4,
      'text': 'Sponsorship',
      'link': '#/sponsorship'
    }, {
      'index': 5,
      'text': 'Contact Us',
      'link': '#/contact'
    }];

    $scope.year = (new Date()).getFullYear();
  }
]);
