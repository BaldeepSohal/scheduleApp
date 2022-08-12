'use strict';

/* jshint -W098 */
angular.module('mean.initial-settings').controller('InitialSettingsController', ['$scope', 'Global', 'InitialSettings',
  function($scope, Global, InitialSettings) {
    $scope.global = Global;
    $scope.package = {
      name: 'initial-settings'
    };

    $scope.users = [
        {name : $scope.global.user.name, email : $scope.global.user.name},
    ];
      $scope.checkboxModel = {
          monday : true,
          tuesday : true,
          wednesday : true,
          thursday : true,
          friday : true,
          saturday : false,
          sunday : false
      };
      //$scope.timingsFromMonday = '12:00 am';
      //$scope.timingsFromTuesday = '';
      $scope.timings = [
          {code: 1, name: '12:00 am'},
          {code: 2, name: '01:00 am'},
          {code: 3, name: '03:00 am'},
          {code: 4, name: '04:00 am'},
          {code: 5, name: '05:00 am'},
          {code: 6, name: '06:00 am'},
          {code: 7, name: '07:00 am'},
          {code: 8, name: '08:00 am'},
          {code: 9, name: '09:00 am'},
          {code: 10, name: '10:00 am'},
          {code: 11, name: '11:00 am'},
          {code: 12, name: '12:00 pm'},
          {code: 13, name: '01:00 pm'},
          {code: 14, name: '02:00 pm'},
          {code: 15, name: '03:00 pm'},
          {code: 16, name: '04:00 pm'},
          {code: 17, name: '05:00 pm'},
          {code: 18, name: '06:00 pm'},
          {code: 19, name: '07:00 pm'},
          {code: 20, name: '08:00 pm'},
          {code: 21, name: '09:00 pm'},
          {code: 22, name: '10:00 pm'},
          {code: 23, name: '11:00 pm'},

      ];
      $scope.timingsFromMonday = $scope.timings[7];
      $scope.timingsFromTuesday = $scope.timings[7];
      $scope.timingsFromWednesday = $scope.timings[7];
      $scope.timingsFromThursday = $scope.timings[7];
      $scope.timingsFromFriday = $scope.timings[7];
      $scope.timingsFromSaturday = $scope.timings[7];
      $scope.timingsFromSunday = $scope.timings[7];
      $scope.timingsToMonday = $scope.timings[16];
      $scope.timingsToTuesday = $scope.timings[16];
      $scope.timingsToWednesday = $scope.timings[16];
      $scope.timingsToThursday = $scope.timings[16];
      $scope.timingsToFriday = $scope.timings[16];
      $scope.timingsToSaturday = $scope.timings[16];
      $scope.timingsToSunday = $scope.timings[16];
      $scope.updates = function() {
       console.log($scope.timingsFromMonday.name);
      }

      // add user
      $scope.addUser = function() {
          $scope.inserted = {

              name: $scope.staff_name,
              email: $scope.staff_email
          };
          $scope.users.push($scope.inserted);
      };

  }

      //.config(['$viewPathProvider', function($viewPathProvider) {
      //  $viewPathProvider.override('system/views/index.html', 'mycustompackage/views/myhomepage.html');}])


]);
