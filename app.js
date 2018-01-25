var Person = require('./constructor');
var payMethodService = require('./pay-method.service');

const employee = new Person('Daniel', 37, 'Developer', 'Venezuela');

employee.greeting();

var _payMethodService = new payMethodService;
var myData = _payMethodService.getPayMethods().then((data)=>{
    console.log(data)
})