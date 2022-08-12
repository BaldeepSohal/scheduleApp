'use strict';

/* jshint -W098 */
angular.module('mean.customers').controller('CustomersController', ['$scope', 'Global', 'Customers',
  function($scope, Global, Customers) {
    $scope.global = Global;
    $scope.package = {
      name: 'customers'
    };
  }
]);
