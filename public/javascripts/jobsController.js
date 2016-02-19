(function() {

 var app = angular.module('JobOut');
  app.controller('JobsController', function($http) {
   var self = this;

   $http({
     method: 'GET',
      url: '/api/v1/jobs'
    }).then(function successCallback(response) {
      console.log('success', response.data.docs);

      self.jobs = response.data.docs;
    }, function errorCallback(response) {

    });

    return this;
  });
})();
