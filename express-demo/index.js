const express = require('express'); // Importing Express framework
const Joi = require('joi'); // Importing Joi for input validation

const app = express(); // Initializing Express app

app.use(express.json()); // Middleware to parse incoming JSON requests

// Sample data: List of courses
courses = [
    { id: 1, name: 'course1' },
    { id: 2, name: 'course2' },
    { id: 3, name: 'course3' }
];

app.get('/', (req, res) => {
    res.send('Hello World123456789');
});
app.get('/api/courses', (req, res) => {
    res.send(courses);
})
/* app.get('/api/courses/:id', (req, res) => {
    res.send(req.params.id);
}); */

app.get('/api/courses/post/:year/:month', function (req, res) {
    res.send(req.params);
});

app.get('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) res.status(404).send(`the given course was not found ${req.params.id}`);
    res.send(course);
});

// Route to handle HTTP POST request to add a new course
app.post('/api/courses', (req, res) => {
    const result = validateCourse(req.body);


    /*  // Defining validation schema for request body using Joi
     const schema = Joi.object({
         name: Joi.string().min(3).required() // 'name' must be a string, at least 3 characters, and required
     });
 
     // Validating request body against the schema  */
    //moving above code to validateCourse function because of multiple usage of code 
    const { error } = schema.validate(req.body);

    // If validation fails, return 400 Bad Request with the error message
    if (error) {
        res.status(400).send(error.details[0].message);
        return; // Stop further execution
    }

    /* if (!req.body.name || req.body.name.length < 3) {
        res.status(400).send('Name is required and should be minimum 3 characters');
        return;
    }*/

    // Create new course object
    const course = {
        id: courses.length + 1, // Auto-generate ID based on current array length
        name: req.body.name // Assigning name from request body
    };

    // Add the new course to the array
    courses.push(course);

    // Respond with the newly created course
    res.send(course);
});


app.put('/api/courses/:id', (req, res) => {

    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) res.status(404).send(`the given course was not found ${req.params.id}`);
    //lookup the course
    // If the course is not found, return 404 Not Found

    //validate the course
    //if invalid return 400 bad request
    const result = validateCourse(req.body);
    const { error } = schema.validate(req.body);
    /*  const schema = Joi.object({
         name: Joi.string().min(3).required() // 'name' must be a string, at least 3 characters, and required
     });
     */ //using the same code above so we define function validateCourse below
    if (error) {
        res.status(400).send(error.details[0].message);
        return; // Stop further execution
    }

    function validateCourse(course) {
        const schema = Joi.object({
            name: Joi.string().min(3).required() // 'name' must be a string, at least 3 characters, and required
        });
        return schema.validate(course);
    }
    // Update the course name
    course.name = req.body.name;
    // Respond/return with the updated course
    res.send(course);
});



// Define the port where the server will listen (default: 3000)
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));




