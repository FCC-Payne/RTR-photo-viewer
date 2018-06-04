const helpers = require('../database/helpers.js');

test('getEndpoints returns correct endpoints', done => {
  function callback(err, data) {
    expect(err).toBeNull();
    expect(data[0].picOne).toBe('100-1.jpeg');
    expect(data[0].picTwo).toBe('100-2.jpeg');
    expect(data[0].picThree).toBe('100-3.jpeg');
    expect(data[0].picFour).toBe('100-4.jpeg');
    done();
  }

  helpers.getEndpoints(100, callback);
});