'use strict';

describe('Service: svgUtilService', function () {

  // load the service's module
  beforeEach(module('howbighowmanyApp'));

  // instantiate service
  var svgUtilService;
  beforeEach(inject(function (_svgUtilService_) {
    svgUtilService = _svgUtilService_;
  }));

  it('should do something', function () {
    expect(!!svgUtilService).toBe(true);
  });

});
