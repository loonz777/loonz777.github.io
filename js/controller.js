angular.module('RouteControllers',[])
	.controller('HomeController', function($scope){
		$scope.title = "Welcome to Webpage";
	})

	.controller('SignUpController', function($scope) {

		$scope.signupUser = {};

		$scope.submitForm = function() {
			if ($scope.signupForm.$valid) {
				$scope.signupUser.username = $scope.user.username;
				$scope.signupUser.password = $scope.user.password;
				$scope.signupUser.email = $scope.user.email;
			}

			console.log($scope.signupUser.username + " " + $scope.signupUser.password + " " + $scope.signupUser.email);
		}
	});