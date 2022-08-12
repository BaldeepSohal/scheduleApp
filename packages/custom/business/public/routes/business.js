'use strict';

angular.module('mean.business').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('business example page', {
      url: '/business/example',
      templateUrl: 'business/views/index.html'
    });
  }
]);
