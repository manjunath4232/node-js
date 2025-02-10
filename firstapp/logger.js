var url = "http://mylogger.io/log";
function log(message) {
    // Send an HTTP request
    console.log(message);
} //in this module we are exporting the log
//var & log are scoped to this module only and they are not available outside this module

//module.exports.log = log; // we are exporting the log function from this module
// module.exports.myurl = url; // we are exporting the url variable from this module,here myurl is a name given to the url variable which is exported from this module and we can use this name to access the url variable in other modules
//instead of exporting object with .log we can export the log function directly by using the below code
module.exports = log; // we are exporting the log function from this module

/* node does not execute our code directly it always wraps code in a function with some parameters like modules,expoerts,require
we call that function as module wrapper function and this function is executed by nodejs ,this function look like this
(function(exports, require, module, __filename, __dirname){ code here })  
we can write 
module.exports.log = log;
exports.log=log;
but it is not recommended writ exports = log; because it will overwrite the exports object*/

console.log(__filename); // it will print the file name
console.log(__dirname); // it will print the directory name

/* class logger{
    log(message){ //when we deine function in class it is called method we dont need function keyword
        console.log(message);
    }   
}*/

