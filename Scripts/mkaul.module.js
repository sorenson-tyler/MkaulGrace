var myapp = angular.module('mkaul', []);

myapp.controller('homeController', function($scope) {
	var vm = this;
	$scope.display = "Welcome to Mkaul Grace's corner";
    
    $scope.items = [
        {
            src: 'Images/IMG_6403.jpg',
            name: 'Indie',
            title: 'Beautiful Bib',
            description: 'Take this lovely bad boy for a spin'
        },
        {
            src: 'Images/IMG_6377.jpg',
            name: 'Indie',
            title: 'Beautiful Bib',
            description: 'Take this lovely bad boy for a spin'
        },
        {
            src: 'Images/IMG_6614.jpg',
            name: 'Indie',
            title: 'Beautiful Bib',
            description: 'Take this lovely bad boy for a spin'
        },
        {
            src: 'Images/IMG_6403.jpg',
            name: 'Indie',
            title: 'Beautiful Bib',
            description: 'Take this lovely bad boy for a spin'
        },
        {
            src: 'Images/IMG_6377.jpg',
            name: 'Indie',
            title: 'Beautiful Bib',
            description: 'Take this lovely bad boy for a spin'
        },
        {
            src: 'Images/IMG_6614.jpg',
            name: 'Indie',
            title: 'Beautiful Bib',
            description: 'Take this lovely bad boy for a spin'
        },
        {
            src: 'Images/IMG_6403.jpg',
            name: 'Indie',
            title: 'Beautiful Bib',
            description: 'Take this lovely bad boy for a spin'
        }]
});