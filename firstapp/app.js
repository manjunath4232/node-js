
function sayHello(name) { //this is a function declaration here function is defined with function keyword and name is a parameter
    console.log('Hello ' + name); //here name is a parameter which is passed to the function and we are printing the name with Hello
}

sayHello('Manjunath'); //here we are calling the function with a parameter simple we are passing the value to the functions
// Output: Hello Manjunath

//console.log(); // global object in nodejs means it is available in all the files and modules, it is used to print the output to the console
//similarly we have setTimeout(), clearTimeout(), setInterval(), clearInterval() etc.
//setTimeout() is used to call a function after a delay of some time e.g. setTimeout(function(){console.log('Hello')}, 3000); // it will print Hello after 3 seconds
//clearTimeout() is used to stop the setTimeout() function e.g. clearTimeout(setTimeout(function(){console.log('Hello')}, 3000)); // it will not print Hello after 3 seconds
//setInterval() is used to call a function after every interval of time e.g. setInterval(function(){console.log('Hello')}, 3000); // it will print Hello after every 3 seconds
//clearInterval() is used to stop the setInterval() function e.g. clearInterval(setInterval(function(){console.log('Hello')}, 3000)); // it will not print Hello after every 3 seconds

//window.sayHello('Manjunath'); // it will give error because window is not defined in nodejs
//window.console.log(); // window is a global object in browser, it is used to print the output to the console
//similarly we have window.setTimeout(), window.clearTimeout(), window.setInterval(), window.clearInterval() etc.
//window.setTimeout() is used to call a function after a delay of some time e.g. window.setTimeout(function(){console.log('Hello')}, 3000); // it will print Hello after 3 seconds
//window means it is a global object in browser, it is used to access the global variables and functions
//window.clearTimeout() is used to stop the window.setTimeout() function e.g. window.clearTimeout(window.setTimeout(function(){console.log('Hello')}, 3000)); // it will not print Hello after 3 seconds
//global.console.log(); // global is a global object in nodejs, it is used to print the output to the console
var message = 'manjunath';
global.console.log(message); // Output: 'manjunath' why because message is a global variable
console.log(global.message);// Output: undefined why because message is not a global variable 
//difference beteween line 24 and 25 is that in line 24 we are using global object to access the console object and in line 25 we are using console object to access the global object
//message variable is global in line 24 and it is not global in line 25 because we are using global object to access the console object in line 24 and we are using console object to access the global object in line 25


var sayHello1 = function () { //this also one way of defining a functions in javascript here variable is assigned to a functions and this is called as function expression
    console.log('Hello ' + name2);
}
var name2 = 'Manjunath expression'; //here we are defining the name2 variable after the function expression but still it is working because function expression is not hoisted to the top of the file
sayHello1(); // Output: Hello Manjunath expression because name2 is a global variables

function sayHello2() { //this is another way of defining a function in javascript,here function is defined with function keyword and this is called as function declaration
    console.log('Hello ' + name3);
}
var name3 = 'Manjunath declaration'; //here we are defining the name3 variable after the function declaration but still it is working because function declaration is hoisted to the top of the file
sayHello2(); // Output: Hello Manjunath declaration

//difference between function declaration and function expression is that in function declaration we can call the function before defining it but in function expression we cannot call the function before defining it
//here sayHello1 is a function expression and sayHello2 is a function declaration
//in expression we are assigning a function to a variable and in declaration we are defining a function with function keyword

//console.log(module); // it will print the module object 
//in node every file is a module, module is a global object in nodejs, it is used to access the current module
//variables defined in a module are scoped to that module, they are not available outside the module
//module.exports is used to export the variables and functions from a module

/* const logger=require('./logger.js'); // we are importing the logger module from logger.js file
logger.log('message'); //it will print message
 console.log(logger); // it will print the logger object 'output=> { log: [Function: log] }' because we are exporting the log function from logger module */

const logger = require('./logger.js'); // we are importing the logger module from logger.js file
logger('message1'); //it will print message1
//here instead of exporting an object from a module we are exporting a single function from a module so we can directly call the function without using the object name
//logger is no longer an object it is a function now
//we can call the function directly without using the object name
const log1 = require('./logger.js'); // we are importing the logger module from logger.js file
log1('message2'); //it will print message2 here log1 is a name given to the logger function which is exported from logger module and we can use this name to access the logger function in other modules




















