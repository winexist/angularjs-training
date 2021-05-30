var mainApp = angular.module('mainApp', []);
  mainApp.controller('AppController', function($scope, convertToFar) {
    $scope.far;
    $scope.convert = function(input) {
      $scope.far = convertToFar.toFarenheit(input);
    }
  });

