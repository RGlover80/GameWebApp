'use strict';

angular.module('MainCtrl', []).controller('MainController', function($scope, $http) {

	$scope.tagline = 'To the moon and back!';
   // Get images from the database
	 $http({method: 'GET', url: '/api/images'}).
    success(function(data, status, headers, config) {
      $scope.images = data;
    }).
    error(function(data, status, headers, config) {
      // called asynchronously if an error occurs
      // or server returns response with an error status.
    });
});