'use strict';

/* jshint -W098 */
angular.module('mean.business').controller('BusinessController', ['$scope', 'Global', 'Business',
  function($scope, Global, Business) {
    $scope.global = Global;
    $scope.package = {
      name: 'business'
    };
  }
]);
