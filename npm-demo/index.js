var _ = require('underscore');

//core module
//file or folder
//node_modules
var result = _.without([1, 2, 3], 2);
console.log(result); //output => [ 1, 3 ]
var result1 = _.contains([1, 2, 3], 2);
console.log(result1); //output => true

//without and contains are utility functions

var lion = require('lion-lib-89-69');
var result2 = lion.add(1, 2);
console.log(result2);

var result3 = lion.multiply(23, 3);
console.log(result3);

var result4 = lion.square(9);
console.log(result4);
