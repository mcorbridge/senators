/* global angular */
/* jslint node: true */
'use strict';

angular.module('test', [])

	.config(function() {
		console.log('test config');
	})

	.run(function() {
		console.log('test run');
	});


