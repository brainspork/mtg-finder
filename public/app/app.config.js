'use strict';

angular.
  module('mtgFinder').
    config(['$locationProvider', '$routeProvider',
      function config($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');

        $routeProvider.
          when('/home', {
            template: '<home></home>'
          }).
          when('/search', {
            template: '<search></search>'
          }).
          when('/card/:id', {
            template: '<card-detail></card-detail>'
          }).
          otherwise('/home');
  }]);
