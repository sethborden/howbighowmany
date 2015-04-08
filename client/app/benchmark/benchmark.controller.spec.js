'use strict';

describe('Controller: BenchmarkCtrl', function () {

  // load the controller's module
  beforeEach(module('howbighowmanyApp'));

  var BenchmarkCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BenchmarkCtrl = $controller('BenchmarkCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
