'use strict';

angular.module('shriExam1App.service', [])
  .factory('studentsService', function ($http) {
    return {
      dataFile: 'data/students.json',

      /**
       * Get students data as array
       * @return {$q.defer().promise} Promise object with future data
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