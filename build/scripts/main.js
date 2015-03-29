/* global angular */
/* jslint node: true */
'use strict';

angular.module('app', ['ui.router','uiRouterStyles','foo'])

	.config(['$stateProvider', function($stateProvider) {
		console.log('app config');

		$stateProvider.state('angular',{
			views:{
				'main':{
					url:'',
					controller:'MainCtrl',
					templateUrl:'views/angular.html',
					data: {
						css: '../../build/styles/css/main.min.css'
					}
				},
				'sidebar':{
					url:'',
					controller:'MainCtrl',
					templateUrl:'views/sidebar.html',
					data: {
						css: '../../build/styles/css/main.min.css'
					}
				}
			}
		});

		$stateProvider.state('gulp',{
			views: {
				'main': {
					url: 'gulp',
					controller: 'MainCtrl',
					templateUrl: 'views/gulp.html',
					data: {
						css: '../../build/styles/css/main.min.css'
					}
				},
				'sidebar':{
					url:'gulp',
					controller:'MainCtrl',
					templateUrl:'views/sidebar.html',
					data: {
						css: '../../build/styles/css/main.min.css'
					}
				}
			}
		});

		$stateProvider.state('bower',{
			views: {
				'main': {
					url: 'bower',
					controller: 'MainCtrl',
					templateUrl: 'views/bower.html',
					data: {
						css: '../../build/styles/css/main.min.css'
					}
				},
				'sidebar':{
					url:'bower',
					controller:'MainCtrl',
					templateUrl:'views/sidebar.html',
					data: {
						css: '../../build/styles/css/main.min.css'
					}
				}
			}
		});
	}])

	.run(['$state', function($state){
		// this appears to 'prime the pump' <-- seems like a hack?
		$state.go('angular');
		$state.go('bower');
		$state.go('gulp');
	}])

	.service('stateGetterSetter',[function(){
		console.log('stateGetterSetter');
		this.currentState = '';
		this.setCurrentState = function(state){
			this.currentState = state;
		};
		this.getCurrentState = function(){
			return this.currentState;
		};
	}])


	.controller('MainCtrl', ['$scope','$state', 'stateGetterSetter', function($scope, $state, stateGetterSetter){

		$scope.showBower = false;
		$scope.showGulp = false;
		$scope.showAngular = false;

		$scope.doClick = function(arg){

			console.log('$scope.doClick ---> ' + arg);

			$scope.showBower = false;
			$scope.showGulp = false;
			$scope.showAngular = false;

			switch(arg)
			{
				case 'bower':
					$scope.showBower = true;
					$state.go('angular');
					stateGetterSetter.setCurrentState('angular');
					break;

				case 'angular':
					$scope.showAngular = true;
					$state.go('gulp');
					stateGetterSetter.setCurrentState('gulp');
					break;

				case 'gulp':
					$scope.showGulp = true;
					$state.go('bower');
					stateGetterSetter.setCurrentState('bower');
					break;
			}
		};

		$scope.doBtnClick = function(arg){

			console.log('$scope.doBtnClick ---> ' + arg);

			switch(arg)
			{
				case 'bower':
					$scope.showBower = true;
					$state.go('bower');
					stateGetterSetter.setCurrentState('bower');
					break;

				case 'angular':
					$scope.showAngular = true;
					$state.go('angular');
					stateGetterSetter.setCurrentState('angular');
					break;

				case 'gulp':
					$scope.showGulp = true;
					$state.go('gulp');
					stateGetterSetter.setCurrentState('gulp');
					break;
			}
		};

	}])

	.controller('BizCardCtrl', ['$scope', function($scope){
		console.log('---> BizCardCtrl');
	}]);






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


