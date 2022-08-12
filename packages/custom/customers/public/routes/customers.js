'use strict';

angular.module('mean.customers').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('customers example page', {
      url: '/customers/example',
      templateUrl: 'customers/views/index.html'
    });
  }
]);
