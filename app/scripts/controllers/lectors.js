'use strict';

angular.module('shriExam1App')
  .controller('LectorsCtrl',
    ['$scope', '$location', 'lectorsService', function ($scope, $location, lectorsService) {

      $scope.path = $location.path();

      /**
       * Массив с лекторами
       * @type {Array}
       */
      $scope.lectors = lectorsService.getLectors();
      
      /**
       * Массив с лекциями.
       *
       * Он будет заполнен, когда promise сервиса lectorsService.getLectors()
       * будет resolve.
       * 
       * @param  {Array} lectors Данные из promise.
       * @return {Array}         Массив с лекциями.
       */
      $scope.lectures = $scope.lectors.then(function(lectors){
        var lectures = [];
        angular.forEach(lectors, function(lector){
          angular.forEach(lector.all_lectures, function(lecture){
            lecture.lector = lector;
            lectures.push(lecture);
          });
        });
        return lectures;
      });
      

    }]
  );