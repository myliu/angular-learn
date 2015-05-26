(function () {
    var OrderController = function ($scope, $routeParams) {
        var customerId = $routeParams.customerId;

        $scope.orders = null;

        function init() {
            for (var i = 0; i < $scope.customers.length; i++) {
                if ($scope.customers[i].id === parseInt(customerId)) {
                    $scope.orders = $scope.customers[i].orders;
                    break;
                }
            }
        }

        $scope.customers = [
            {
                id: 1,
                joined: '2000-12-02',
                name: 'John',
                city: 'Belmont',
                orderTotal: 9.999,
                orders: [
                    {
                        id: 1,
                        product: 'Shoes',
                        total: 9.999
                    }
                ]
            },
            {
                id: 2,
                joined: '2011-12-02',
                name: 'Doe',
                city: 'San Carlos',
                orderTotal: 1.299,
                orders: [
                    {
                        id: 2,
                        product: 'Pants',
                        total: 1.299
                    }
                ]
            }
        ];

        init();
    }

    OrderController.$inject = ['$scope', '$routeParams'];

    angular.module('customerApp').controller('OrderController', OrderController);

}());