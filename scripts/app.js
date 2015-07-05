/**
 *  Module: knox
 *
 * Description: Main app module
 */
var app = angular.module('knox', ['ui.bootstrap']);

app.config(['',
  function() {

  }
]);

app.controller('MainController', ['$scope',
  function($scope) {
    $scope.title = 'Team KNOx IIT Roorkee';
  }
]);
