const express = require('express'); // Importing Express framework
const Joi = require('joi'); // Importing Joi for input validation
const LoGger = require('./middleware/logger');
const app = express(); // Initializing Express app
const Helllllmet = require('helmet');
const Morgan = require('morgan');
const CoNfig = require('config');
const startupDebugger = require('debug')('app:startup');
const dbDebugger = require('debug')('app:db');
const Courses = require('./routers/courses');
const Home = require('./routers/home');

app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.json()); // Middleware to parse incoming JSON requests

//middleware function is a function is a function that is executed when a request is made to the server and it may also passes the control to next function
app.use(LoGger);
app.use(function (req, res, next) {
    console.log('authentication middleware');
    next();
});
//inbuilt middleware functions
app.use(express.urlencoded());//key=value&key2=value2
app.use(express.static('public'));
//thirdparty middleware
app.use(Helllllmet());
app.use('/api/courses', Courses);
app.use('/', Home);
//app.use(Morgan('combined'));
// Sample data: List of courses
//environment
/* console.log(`node.env=>${process.env.NODE_ENV}`);
console.log(`app.env=>${app.get('env')}`); output => node.env=>undefined app.env=>development  */

//configuration
console.log(`application name=>${CoNfig.get('name')}`);
console.log(`mail server=>${CoNfig.get('mail.host')}`);
//console.log(`mail password=>${CoNfig.get('mail.password')}`);

if (app.get('env') === 'development') {
    app.use(Morgan('tiny'));
    //console.log('Morgan enabled');
    startupDebugger('Morgan enabled');
}

// database work
//   debugger
dbDebugger('Connected to database');



// Define the port where the server will listen (default: 3000)
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
