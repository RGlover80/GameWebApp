'use strict';

angular.module('sampleApp', ['ngRoute', 'MainCtrl', 'UploadCtrl', 'ui.router', 'ngResource','flow'])
	
	.config(function($stateProvider, $urlRouterProvider) {

		$urlRouterProvider.otherwise('/home');
		$stateProvider
		.state('home', {
			url: '/home',
			templateUrl: 'views/home.html',
			controller: 'MainController'	
	})
		.state('upload', {
			url: '/home',
			templateUrl: 'views/upload.html',
			controller: 'UploadController'	
	});
});