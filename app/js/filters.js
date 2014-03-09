'use strict';

/* Filters */

angular.module('myApp.filters', []).
  filter('toUpper', [function() {
    return function(text) {
      return text.toUpperCase();
    }
  }]);
