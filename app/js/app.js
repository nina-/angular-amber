'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
	//console.log("hh");
  $routeProvider.when('/ee', {templateUrl: 'views/hallo.html', controller: 'HalloCtrl'});
  $routeProvider.when('/test', {templateUrl: 'views/test.html', controller: 'TestCtrl'});
  $routeProvider.otherwise({redirectTo: '/ee'});
}]);
