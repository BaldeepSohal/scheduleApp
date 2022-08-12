'use strict';

angular.module('mean.calender').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('calender example page', {
      url: '/calender/example',
      templateUrl: 'calender/views/index.html'
    });
  }
]);
