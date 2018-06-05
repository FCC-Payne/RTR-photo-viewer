const helpers = require('../database/helpers.js');

test('getEndpoints returns correct endpoints', done => {
  function callback(err, data) {
    expect(err).toBeNull();
    expect(data).toContain('100-1.jpeg');
    expect(data).toContain('100-2.jpeg');
    expect(data).toContain('100-3.jpeg');
    expect(data).toContain('100-4.jpeg');
    done();
  }

  helpers.getEndpoints(100, callback);
});

test('getPhotos retrieves pre-signed urls of photos from S3 storage', done => {
  function callback(err, data) {
    expect(err).toBeNull();
    expect(data).toHaveLength(4);
    expect(typeof data[0]).toBe('string');
    done();
  }

  helpers.getPhotos(['100-1.jpeg', '100-2.jpeg', '100-3.jpeg', '100-4.jpeg'], callback);
});
