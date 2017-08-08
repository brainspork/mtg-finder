'use strict';

angular.
  module('navigation').
    component('navigation', {
      templateUrl: 'app/navigation/navigation.template.html',
      controller: ['$rootScope', function navController($rootScope) {
        var self = this;

        $rootScope.currentUser = 'login';
        $rootScope.currentUserProfile = '/login';

        self.openMenu = function() {
          $('nav').toggleClass('open');
          $('body').toggleClass('scroll-stop');
        };
        self.closeMenu = function() {
          $('nav').removeClass('open');
          $('body').removeClass('scroll-stop');
        }
      }]
    });
