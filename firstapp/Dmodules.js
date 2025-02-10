const path = require("path");
var pathObj = path.parse(__filename); //output => { root: 'C:\\', dir: 'D:\\nodejs\\firstapp', base: 'app.js', ext: '.js', name: 'app' }
console.log(pathObj);

const os = require("os");
var totalMemory = os.totalmem(); //output => 1610612736
var freeMemory = os.freemem(); //output => 4294967296
console.log(`Total Memory: ${totalMemory} Free Memory: ${freeMemory}`); //output=> Total Memory: 1610612736 Free Memory: 4294967296

const filesystem = require("fs");

const files1 = filesystem.readdirSync("./"); //it will return an array of files in the current directory
console.log(files1); //syncronous way of reading the files in the current directory

filesystem.readdir("./", function (err, files) {
	//asyncronous way of reading the files in the current directory
	if (err) {
		console.log("Error", err);
	} else {
		console.log("Result", files);
	}
}); //asyncronous way of reading the files in the current directory

//Event
//An event is bascially a signal that something has happened, and a listener is a function that is called when an event occurs.
const EventEmitter = require("events"); //class=EventEmitter
const emitter = new EventEmitter(); //creating an emitter object ,EventEmitter() is a class name { constructor(parameters) { body } }
//class means that we can create objects from this class
//register a listener
emitter.on("messageLogged", function () { //this function is called when an event is raised
	//.on is used to register a listener or we can use addListener method
	console.log("Listener called");
});
//raise an event
emitter.emit("messageLogged"); //.emit is used to raise an event

//event arguments
const EventEmitter1 = require("events"); //class=EventEmitter
const emitter1 = new EventEmitter(); //creating an emitter object
//register a listener
emitter1.on("messageLogged", (arg) => {
	console.log("Listener called", arg);
});
//raise an event
emitter1.emit("messageLogged", { id: "1", url: "http://mylogger.io/log" });

//exercise
const EventEmitter2 = require("events"); //class=EventEmitter2
const emitter2 = new EventEmitter(); //creating an emitter2 object
//register a listener
emitter2.on("logging", (arg) => {
	console.log("Manjunath called", arg);
});
//raise an event
emitter2.emit("logging", "chakri");

//class is a container for functions and properties which we call methods
