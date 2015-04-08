'use strict';

describe('Directive: gaussianNormal', function () {

  // load the directive's module and view
  beforeEach(module('howbighowmanyApp'));
  beforeEach(module('app/components/gaussianNormal/gaussianNormal.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<gaussian-normal></gaussian-normal>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the gaussianNormal directive');
  }));
});