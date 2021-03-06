'use strict';

/**
 * Возвращает случайный угол наклона в диапазоне [-2;2]
 * @return {float} degree number
 */
function getRotate() {
  return (2 - 4*Math.random()).toFixed(2);
}


/**
 * Модуль для хранения сервисов
 */
angular.module('shriExam1App.service', [])
  
  /**
   * Сервис для работы с данными учеников
   * @param  {Service} $http Сервис для работы с HTTP-протоколом
   * @return {Service}
   */
  .factory('studentsService', function ($http, $q) {
    return {
      self: this,
      dataFile: 'data/students.json',

      /**
       * Функция возвращает данные по всем студентам
       * @return {$q.defer().promise} Promise object with future data as js array
       */
      getStudents: function() {
        return $http.get(this.dataFile, { cache: true})
          .error(function() {
            console.log('Cannot get students\' data');
          })
          .then(function(response){
            var items = response.data;
            for (var k in items) {
              items[k].rotation_degree = getRotate();
            }

            return items;
          });
      }
    };
  })
  /**
   * Сервис для работы с данными о лекторах
   * @param  {Service} $http Сервис для работы с HTTP-протоколом
   * @return {Service}
   */
  .factory('lectorsService', function ($http) {
    return {
      dataFile: 'data/lectors_and_lectures.json',

      /**
       * Функция возвращает данные по всем лекторам
       * @return {$q.defer().promise} Promise object with future data as js array
       */
      getLectors: function() {
        return $http.get(this.dataFile, { cache: true})
          .error(function() {
            console.log('Cannot get lectors\' data');
          })
          .then(function(response){
            var lectors = response.data;
            for (var k in lectors) {
              lectors[k].rotation_degree = getRotate();
            }
            return lectors;
          });
      }
    };
  });