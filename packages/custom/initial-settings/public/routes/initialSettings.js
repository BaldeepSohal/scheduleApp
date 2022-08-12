'use strict';

angular.module('mean.initial-settings').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('initialSettings', {
      url: '/initialSettings/index',
      templateUrl: 'initial-settings/views/index.html'
    });
  }
]);
