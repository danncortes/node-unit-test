var assert = require('chai').assert;
var should = require('chai').should();
const Person = require('../constructor');


describe('Person Class', () => {
    it('Should greet with name and profession', () => {
        //Arrange
        const worker = new Person('Daniel', 37, 'developer', 'Venezuela');
        //Act
        const greeting = worker.greeting();
        //Assert
        assert.equal(greeting, 'Hi my name is Daniel and I work as a developer');
    });

    it('Should has US as country by default', ()=>{
        //Arrange
        const worker = new Person('Daniel', 37, 'developer');
        //Act
        //Assert
        assert.equal(worker.country, 'US');
    })
});