'use strict';

angular.module('shriExam1App')
  .controller('LectorsCtrl',
    ['$scope', 'lectorsService', function ($scope, lectorsService) {

      $scope.lectors = lectorsService.getLectors();

    }]
  );