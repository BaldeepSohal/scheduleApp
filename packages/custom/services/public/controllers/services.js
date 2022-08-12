'use strict';

/* jshint -W098 */
angular.module('mean.services').controller('ServicesController', ['$scope', 'Global', 'Services',
  function($scope, Global, Services) {
    $scope.global = Global;
    $scope.package = {
      name: 'services'
    };
  }
]);
