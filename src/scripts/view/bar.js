/* global angular */
/* jslint node: true */
'use strict';

angular.module('bar', [])

	.config(function() {
		console.log('bar config');
	})

	.run(function() {
		console.log('bar run');
	});




