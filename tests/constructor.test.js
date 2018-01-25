var assert = require('chai').assert;
var should = require('chai').should();
const Person = require('../constructor');

const worker = new Person('Daniel', 37, 'developer', 'Venezuela');

describe('Person Class', () => {
    it('Should create an person object', () => {
        assert.typeOf(worker, 'object');
    });

    it('Should has a name property', () => {
        worker.should.include.keys('name');
    })

    it('Should has a age property', () => {
        worker.should.include.keys('age');
    });

    it('Should has an occupation property', () => {
        worker.should.include.keys('occupation');
    });

    it('Should has a greeting method', () => {
        assert.typeOf(worker.greeting, 'function');
    });
});