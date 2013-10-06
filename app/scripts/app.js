'use strict';

var app = angular.module('shriExam1App',
                          ['ngRoute',
                           'ngAnimate',
                           'shriExam1App.service']);

app.config(function ($routeProvider, $locationProvider) {
    
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/lectors', {
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

  });
