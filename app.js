const express = require('express');

const app = express();

const { Person } = require('./constructor');
const PayMethodService = require('./pay-method.service');

const employee = new Person('Daniel', 37, 'Developer', 'Venezuela');

employee.greeting();

const payMethodService = new PayMethodService();
payMethodService.getPayMethods().then((data) => {
    console.log(data);
});

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/users', (req, res) => {
    res.send([
        {
            name: 'Daniel',
            year: 1980,
        },
        {
            name: 'Juancho',
            year: 1985,
        },
    ]);
});

app.listen('3000', () => {
    console.log('Server started at port 3000');
});

// Export app for testing
module.exports.app = app;
