const { assert } = require('chai');
const should = require('chai').should();
const { Person } = require('../constructor');
const { promessFunction } = require('../constructor');

describe('Person Class', () => {
    it('Should greet with name and profession', () => {
        // Arrange
        const worker = new Person('Daniel', 37, 'developer', 'Venezuela');
        // Act
        const greeting = worker.greeting();
        // Assert
        assert.equal(greeting, 'Hi my name is Daniel and I work as a developer');
    });

    it('Should has US as country by default', () => {
        // Arrange
        const worker = new Person('Daniel', 37, 'developer');
        // Act
        // Assert
        assert.equal(worker.country, 'US');
    });
});

describe('Promess Function', () => {
    // Insert Done to execute and end test only when the async data be brought
    it('Should bring data as string', (done) => {
        // Arrange
        promessFunction('Hello').then((data) => {
            assert.equal(data, 'Is resolve!, data is: Hello');
            // To async data done() funtion is needed
            done();
        });
    });
});

