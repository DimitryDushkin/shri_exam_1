'use strict';

describe('Service: lectorsService', function () {

  // load the service's module
  beforeEach(module('shriExam1App.service'));

  // instantiate service
  var lectorsService,
      $httpBackend;

  beforeEach(inject(function ($injector) {
    lectorsService = $injector.get('lectorsService');
    $httpBackend = $injector.get('$httpBackend');

    $httpBackend.expectGET('data/lectors.json')
          .respond(
            {
             'lectors' : [{name: 'Dima'}, {name: 'Natasha'}],
             'lectures': [1, 2]
            });

  }));




  it('should fulfill lectors array', function () {
    var result;
    lectorsService.getLectors().then(function(data){
      result = data;
    });
    
    $httpBackend.flush();
    expect(result.length).toBeGreaterThan(1);
  });

  it('should fulfill lectures array', function () {
    var result;
    lectorsService.getLectures().then(function(data){
      result = data;
    });
    
    $httpBackend.flush();
    expect(result.length).toBeGreaterThan(1);
  });

  it('should add degree to objects', function() {
    var result;
    lectorsService.getLectors().then(function(data){
      result = data;
    });

    $httpBackend.flush();
    expect(result[0]['rotation_degree']).toBeDefined();
  });

});