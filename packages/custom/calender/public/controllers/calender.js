'use strict';

/* jshint -W098 */
angular.module('mean.calender').controller('CalenderController', ['$scope', 'Global', 'Calender',
  function($scope, Global, Calender) {
    $scope.global = Global;
    $scope.package = {
      name: 'calender'
    };
  }
]);
