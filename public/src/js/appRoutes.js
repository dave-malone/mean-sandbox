angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'src/views/home.html',
			controller: 'MainController'
		})

		.when('/nerds', {
			templateUrl: 'src/views/nerd.html',
			controller: 'NerdController'
		})

		.when('/geeks', {
			templateUrl: 'src/views/geek.html',
			controller: 'GeekController'	
		});

	$locationProvider.html5Mode(true);

}]);