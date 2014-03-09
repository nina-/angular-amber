'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('HalloCtrl', ['$scope', function($scope) {
  	$scope.name='Martina';

  	$scope.save=function(){
  		alert($scope.name);
  	}
  }])
  .controller('TestCtrl', [function() {


  }]);