var myapp = angular.module('mkaul', []);

myapp.controller('homeController', function($scope) {
	var vm = this;
	$scope.display = "Welcome to Mkaul Grace's corner";
});