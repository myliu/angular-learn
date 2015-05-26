(function () {
    var OrderController = function ($scope, $routeParams, customerFactory) {
        var customerId = $routeParams.customerId;

        $scope.customer = null;

        function init() {
            $scope.customer = customerFactory.getCustomer(customerId);
        }

        init();
    }

    OrderController.$inject = ['$scope', '$routeParams', 'customerFactory'];

    angular.module('customerApp').controller('OrderController', OrderController);

}());