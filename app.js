var myAngularApp = angular.module('myAngularApp', ['ngRoute']);

myAngularApp
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        // change to templateUrl
        // point to the correct html file
        template: ''
      })
      .when('/about', {
        // change to templateUrl
        template: ''
      })
      .when('/contact', {
        // change to templateUrl
        template: ''
      })
      .otherwise({
        template: '<h1>Page not found.</h1>'
      });
  });