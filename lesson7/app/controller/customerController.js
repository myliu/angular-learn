// Option 1
// customerApp.controller('CustomerController', function ($scope) {
//     $scope.customers = [
//         {joined:'2000-12-02', name:'John', city:'Belmont', orderTotal:9.999},
//         {joined:'2011-12-02', name:'Doe', city:'San Carlos', orderTotal:1.299}
//     ];
// });

// Option 2
// (function () {

//     angular.module('customerApp').controller('CustomerController', function ($scope) {
//         $scope.customers = [
//             {joined:'2000-12-02', name:'John', city:'Belmont', orderTotal:9.999},
//             {joined:'2011-12-02', name:'Doe', city:'San Carlos', orderTotal:1.299}
//         ];
//     });

// }());

// Option 3
(function () {
    var CustomerController = function ($scope) {
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
    }

    CustomerController.$inject = ['$scope'];

    angular.module('customerApp').controller('CustomerController', CustomerController);

}());