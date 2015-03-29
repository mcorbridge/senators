/* global angular */
/* jslint node: true */
'use strict';

angular.module('foo', [])

	.config(function() {
		console.log('foo config');
	})

	.run(function() {
		console.log('foo run');
	})

	.controller('MainCtrl', [function(){
		   console.log('foo.MainCtrl');
	}]);

