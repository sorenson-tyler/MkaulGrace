var myapp = angular.module('mkaul', ['ngAnimate', 'toastr']);

myapp.controller('homeController', function($scope, toastr) {
	var vm = this;
	$scope.display = "Indie & Ivers";
    $scope.currentPage = 'Views/SelectItem.html';
    $scope.items = [
        {
            src: 'Images/IMG_6403.jpg',
            name: 'Indie',
            title: 'Beautiful Bib',
            description: 'Take this lovely bad boy for a spin',
            active: true,
            price: 20.99,
            id: 1
        },
        {
            src: 'Images/IMG_6377.jpg',
            name: 'Indie',
            title: 'Beautiful Bib',
            description: 'Take this lovely bad boy for a spin',
            active: false,
            price: 20.99,
            id: 2
        },
        {
            src: 'Images/IMG_6614.jpg',
            name: 'Indie',
            title: 'Beautiful Bib',
            description: 'Take this lovely bad boy for a spin',
            active: false,
            price: 20.99,
            id: 3
        },
        {
            src: 'Images/IMG_6403.jpg',
            name: 'Indie',
            title: 'Beautiful Bib',
            description: 'Take this lovely bad boy for a spin',
            active: true,
            price: 20.99,
            id: 4
        },
        {
            src: 'Images/IMG_6377.jpg',
            name: 'Indie',
            title: 'Beautiful Bib',
            description: 'Take this lovely bad boy for a spin',
            active: false,
            price: 20.99,
            id: 5
        },
        {
            src: 'Images/IMG_6614.jpg',
            name: 'Indie',
            title: 'Beautiful Bib',
            description: 'Take this lovely bad boy for a spin',
            active: false,
            price: 20.99,
            id: 6
        },
        {
            src: 'Images/IMG_6403.jpg',
            name: 'Indie',
            title: 'Beautiful Bib',
            description: 'Take this lovely bad boy for a spin',
            active: true,
            price: 20.99,
            id: 7
        },
        {
            src: 'Images/IMG_6377.jpg',
            name: 'Indie',
            title: 'Beautiful Bib',
            description: 'Take this lovely bad boy for a spin',
            active: false,
            price: 20.99,
            id: 8
        },
        {
            src: 'Images/IMG_6614.jpg',
            name: 'Indie',
            title: 'Beautiful Bib',
            description: 'Take this lovely bad boy for a spin',
            active: false,
            price: 20.99,
            id: 9
        }]

        $scope.inCart = [];

        $scope.itemPage = function(item) {
                $scope.currentPage = 'Views/ItemPage.html';
                $scope.selectedItem = item;
        }

        $scope.returnToItems = function() {
            $scope.currentPage = 'Views/SelectItem.html';
        }

        $scope.enterCart = function() {
            $scope.currentPage = 'Views/Cart.html';
        }

        $scope.addToCart = function(item) {
            $scope.inCart.push(item);
            toastr.success(item.title + ' added to cart<br/><div ng-click="enterCart()">Go to cart</div>', 'Success');
        }

        $scope.removeFromCart = function(item) {
            var i=0, len=$scope.inCart.length;
            for (; i<len; i++) {
                if ($scope.inCart[i].id == item.id) {
                    $scope.inCart.splice(i, 1);
                    toastr.success(item.title + " removed from cart", 'Success');
            }
        }
    }
});

myapp.config(function(toastrConfig) {
  angular.extend(toastrConfig, {
    allowHtml: true,
    closeButton: true,
    closeHtml: '<button>&times;</button>',
    extendedTimeOut: 1000,
    iconClasses: {
      error: 'toast-error',
      info: 'toast-info',
      success: 'toast-success',
      warning: 'toast-warning'
    },  
    messageClass: 'toast-message',
    onHidden: null,
    onShown: null,
    onTap: null,
    progressBar: false,
    tapToDismiss: true,
    templates: {
      toast: 'directives/toast/toast.html',
      progressbar: 'directives/progressbar/progressbar.html'
    },
    timeOut: 5000,
    titleClass: 'toast-title',
    toastClass: 'toast'
  });
});