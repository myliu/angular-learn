(function () {

    var customerFactory = function () {
        var customers = [
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

        var factory = {};

        factory.getCustomers = function () {
            return customers;
        }

        factory.getCustomer = function (customerId) {
            for (var i = 0; i < customers.length; i++) {
                if (customers[i].id === parseInt(customerId)) {
                    return customers[i];
                }
            }
        }

        return factory;
    }

    angular.module('customerApp').factory('customerFactory', customerFactory);

}());