'use strict';

describe('Service: studentsService', function () {

  // load the service's module
  beforeEach(module('shriExam1App'));

  // instantiate service
  var studentsService;
  beforeEach(inject(function (_studentsService_) {
    studentsService = _studentsService_;
  }));

  it('should do something', function () {
    expect(!!studentsService).toBe(true);
  });

});
