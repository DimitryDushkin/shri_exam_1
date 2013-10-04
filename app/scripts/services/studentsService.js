'use strict';

angular.module('shriExam1App.service', [])
  .factory('studentsService', function ($http) {
    return {
      dataFile: 'data/students.json',

      /**
       * Функция возвращает данные по всем студентам
       * @return {$q.defer().promise} Promise object with future data as js array
       */
      getStudents: function() {
        return $http.get(this.dataFile)
          .error(function() {
            console.log('Cannot get students\' data');
          })
          .then(function(response){
            return response.data;
          });
      }

    };
  });