'use strict';

/**
 * Подключаемые модули приложения
 * @type {Module}
 */
var app = angular.module('shriExam1App',
                          ['ngRoute',
                           'ngAnimate',
                           'ngSanitize',
                           'shriExam1App.service']);

/**
 * Пред-стартовая конфигурация приложения
 * @param  {Service} $routeProvider    Для настройки путей
 * @param  {Service} $locationProvider Для настройки поведения URLs
 */
app.config(function ($routeProvider, $locationProvider) {
    
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html'
      })
      .when('/lectors', {
        templateUrl: 'views/lectors.html',
        controller: 'LectorsCtrl'
      })
      .when('/lectures', {
        templateUrl: 'views/lectors.html',
        controller: 'LectorsCtrl'
      })
      .when('/students', {
        templateUrl: 'views/students.html',
        controller: 'StudentsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.hashPrefix('!');
  
  })
  .run(function($location, $rootScope) {
    
    /**
     * Функция для установки класса active для главного меню
     * @param  {String}  viewLocation
     * @return {Boolean}
     */
    $rootScope.isActive = function (viewLocation) {
      return viewLocation === $location.path();
    };

  })

  /**
   * Фильтр для установки первой букве в слове красного цвета
   * @return {String}
   */
  .filter('firstLetterRed', function() {
    return function(input) {
      return input.replace(/(.)/, '<span class="red-letter">$1</span>');
    };
  });
