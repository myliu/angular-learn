(function () {

    var app = angular.module('customerApp', ['ngRoute']);

    app.config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'CustomerController',
                templateUrl: 'app/views/customer.html'
            })
            .otherwise({
                redirect: '/'
            });

    });

}());