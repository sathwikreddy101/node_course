// console.log(arguments);
// console.log(require('module').wrapper);

// module.exports
const C = require('./test-module_1');
const calc1 = new C();
console.log(calc1.add(2, 5));

// exports
const calc2 = require('./test-module_2');
console.log(calc2.multiply(2, 5));

const { add, multiply, divide } = require('./test-module_2');
console.log(multiply(2, 5));

// caching
require('./test-module_3')();
require('./test-module_3')();
require('./test-module_3')();
