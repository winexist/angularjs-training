var myAngularApp = angular.module('myAngularApp', ['ngRoute']);

myAngularApp
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        template: '<h1>Home Page</h1>',
        active: ''
      })
      .when('/about', {
        templateUrl: 'pages/about/index.html',
        controller: 'AboutPageController',
        active: 'about'
      })
      .when('/contact', {
        template: '<h1>Contact Page</h1>',
        active: 'contact'
      })
      .otherwise({
        template: '<h1>Page not found.</h1>'
        // redirectTo: '/'
      });
  });