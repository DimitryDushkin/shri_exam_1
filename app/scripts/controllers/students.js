'use strict';

angular.module('shriExam1App')
  .controller('StudentsCtrl',
    ['$scope', 'studentsService', function ($scope, studentsService) {

      $scope.students = studentsService.getStudents();

    }]
  );