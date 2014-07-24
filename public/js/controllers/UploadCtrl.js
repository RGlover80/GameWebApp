'use strict';

angular.module('UploadCtrl', ['flow'])
.controller('UploadController', function($scope,$http) {
	$scope.showbutton = false;
	$scope.buttonPress = function() {
		$scope.showbutton = true;
	};
	$scope.update = function(){
		var fileReader = new FileReader();
        fileReader.readAsDataURL($scope.$$childHead.$flow.files[0].file);
        fileReader.onload = function (event) {
            //console.log(event.target.result);
            var encoded = event.target.result;
            var encodeArray = encoded.split(',');
            var image = {"image": encodeArray[1] };
            $http.post('/upload', image).success(function(){
            	console.log('uploaded');
            });
        };
	};

});
