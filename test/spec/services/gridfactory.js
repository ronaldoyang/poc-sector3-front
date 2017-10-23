'use strict';

describe('Service: gridFactory', function () {

  // load the service's module
  beforeEach(module('pocSector3FrontApp'));

  // instantiate service
  var gridFactory;
  beforeEach(inject(function (_gridFactory_) {
    gridFactory = _gridFactory_;
  }));

  it('should do something', function () {
    expect(!!gridFactory).toBe(true);
  });

});
