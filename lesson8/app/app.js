(function () {

    var app = angular.module('customerApp', ['ngRoute']);

    app.config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'CustomerController',
                templateUrl: 'app/views/customer.html'
            })
            .when('/orders/:customerId', {
                controller: 'OrderController',
                templateUrl: 'app/views/order.html'
            })
            .otherwise({
                redirect: '/'
            });

    });

}());