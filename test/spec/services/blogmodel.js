'use strict';

describe('Service: BlogModel', function () {

  // load the service's module
  beforeEach(module('simpleBlogApp'));

  // instantiate service
  var BlogModel;
  beforeEach(inject(function (_BlogModel_) {
    BlogModel = _BlogModel_;
  }));

  it('should do something', function () {
    expect(!!BlogModel).toBe(true);
  });

});
