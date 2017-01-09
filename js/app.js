angular.module('KrisWeb', ['ngRoute', 'RouteControllers']);

angular.module('KrisWeb').config(function($locationProvider,$routeProvider){
	$locationProvider.html5Mode(true);

	$routeProvider.when('/', {
		templateUrl:'templates/home.html',
		controller:'HomeController'
		})
		.when('/aboutMe', {
			templateUrl:'templates/aboutme.html',
		})
		.when('/photos', {
			templateUrl:'templates/photos.html',
		})
		.when('/blog', {
			templateUrl:'templates/blog.html',
		})
		.when('/signup', {
			templateUrl:'templates/signup.html',
			controller: 'SignUpController'
		});
	});