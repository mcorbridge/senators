/* global angular */
/* jslint node: true */
'use strict';

angular.module('jan', [])

	.config(function() {
		console.log('jan config');
	})

	.run(function() {
		console.log('jan run');
	});
