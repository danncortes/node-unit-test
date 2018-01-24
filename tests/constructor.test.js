var assert = require('chai').assert;
const Person = require('../constructor');

it('Should create an person object', () => {
    var worker = new Person('Daniel', 37, 'developer', 'Venezuela');
    assert.typeOf(worker, 'object');
});
