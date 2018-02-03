const request = require('supertest');
var expect = require('chai').expect;

var app = require('../app').app;

describe('Server', () => {
    it('Should return hello world response', (done) => {
        request(app)
            .get('/')
            .expect(200)
            .expect('Hello World')
            .end(done);
    });

    it('Should return my user object', (done) => {
        request(app)
            .get('/users')
            .expect(200)
            .expect((res) => {
                //This next expect is from chai
                expect(res.body).to.deep.include({
                    name:'Daniel',
                    year: 1980 
                });
            })
            .end(done);
    });
});