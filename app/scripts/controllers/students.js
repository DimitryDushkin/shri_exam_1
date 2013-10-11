'use strict';

angular.module('shriExam1App')
  .controller('StudentsCtrl',
    ['$scope', 'studentsService', function ($scope, studentsService) {

      /**
       * Массив с данными учеников,
       * возвращаемое значение promise сервиса.
       * @type {Array}
       */
      $scope.students = studentsService.getStudents();

      /**
       * Флаг для показа и скрытия деталей по всем ученикам.
       * @type {Boolean}
       */
      $scope.show_all_details = false;


      /**
       * Данные кругового графика
       * @type {Object}
       */
      $scope.sexChartData = {};

      /**
       * Данные стобчатого графика
       * @type {Object}
       */
      $scope.citiesChartData = {};

      /**
       * Вычисление данных для инфографики в момент, когда
       * пришли данные
       * 
       * @param  {Array} students Данные учеников
       */
      $scope.students.then(function(students) {
        
        var values = [0, 0];
        var cities = [];
        angular.forEach(students, function(v) {
          // Вычисляем число муж. и жен.
          if (v.sex === 'm') {
            values[0] += 1;
          } else {
            values[1] += 1;
          }

          // Вычисляем популярность городов
          if (!(v.city in cities)) {
            cities[v.city] = 1;
          } else {
            cities[v.city] += 1;
          }
        });

        $scope.sexChartData = [
          {
            value: values[0],
            color: '#69D2E7',
            label: ' М (' + values[0] + ')',
            labelColor : 'white'
          },
          {
            value: values[1],
            color: '#F38630',
            label: ' Ж (' + values[1] + ')',
            labelColor : 'white'
          },
        ];

        var labels = [];
        var data = [];
        for (var k in cities) {
          var v = cities[k];
          labels.push(k);
          data.push(v);
        }
        
        $scope.citiesChartData = {
          labels : labels,
          datasets : [
            {
              fillColor : 'rgba(151,187,205,0.5)',
              strokeColor : 'rgba(151,187,205,1)',
              data : data
            }
          ]
        };

      });

      /**
       * Флаг отображения статистики на экране
       * @type {Boolean}
       */
      $scope.isStatisticsShown = false;

      /**
       * Флаг отрисовки графики
       * @type {Boolean}
       */
      $scope.isChartDrown = false;

      
      /**
       * Прорисовка и отображение инфографики (статистики)
       */
      $scope.showStatistics = function() {
        if (!$scope.isStatisticsShown) {
          $scope.isStatisticsShown = true;


          if (!$scope.isChartDrown) {
            $scope.isChartDrown = true;

            var elem = document.getElementById('students__statistics');
            var ctx = elem.getContext('2d');
            new Chart(ctx).Pie($scope.sexChartData, {});

            var elem = document.getElementById('students__statistics_cities');
            var ctx = elem.getContext('2d');
            new Chart(ctx).Bar($scope.citiesChartData, {
              scaleFontColor : "#333",
              scaleFontSize : 18,
              barValueSpacing : 8
            });
            
          }
        } else {
          $scope.isStatisticsShown = false;
        }
      };

    }]
  );