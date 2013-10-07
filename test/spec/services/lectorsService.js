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
          .respond([{name: 'Dima'}, {name: 'Natasha'}]);

  }));




  it('should fulfill lectors array', function () {
    var result;
    lectorsService.getLectors().then(function(data){
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