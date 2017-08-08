'use strict';

angular.
  module('cardDetail').
    component('cardDetail', {
      templateUrl: 'app/card-detail/card-detail.template.html',
      controller: ['$http', '$routeParams', function showDetail($http, $routeParams) {
        var self = this;
        self.id = $routeParams.id;
        $http.get(`/card/${self.id}`).
          then(res => {self.details = res.data[0]});
      }
    ]
  });
