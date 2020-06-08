const request = require('supertest');
const app = require('../lib/app');

describe('createResponse', () => {
  it('checks the / path', () => {
    return request(app)
      .get('/')
      .then(res => {
        expect(res.text).toEqual('hi');
      });
  });

  it('checks the /echo path', () => {
    return request(app)
      .post('/echo')
      .send('hello')
      .then(res => {
        expect(res.text).toEqual('hello');
      });
  });

  it('checks the /red path', () => {
    return request(app)
      .get('/red')
      .then(res => {
        expect(res.text).toEqual('<h1>red</h1>');
      });
  });

  it('checks the /green path', () => {
    return request(app)
      .get('/green')
      .then(res => {
        expect(res.text).toEqual('<h1>green</h1>');
      });
  });

  it('checks the /blue path', () => {
    return request(app)
      .get('/blue')
      .then(res => {
        expect(res.text).toEqual('<h1>blue</h1>');
      });
  });
});
