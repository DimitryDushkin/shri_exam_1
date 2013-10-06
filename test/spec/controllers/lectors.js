'use strict';

describe('Controller: LectorsCtrl', function () {

  // load the controller's module
  beforeEach(module('shriExam1App'));

  var LectorsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LectorsCtrl = $controller('LectorsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
