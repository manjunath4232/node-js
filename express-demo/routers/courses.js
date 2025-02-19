const express = require('express');
const router = express.Router();


courses = [
    { id: 1, name: 'course1' },
    { id: 2, name: 'course2' },
    { id: 3, name: 'course3' }
];



// Route to fetch all courses
router.get('/', (req, res) => {
    res.send(courses);
});

// Route to fetch post data with year and month as params
router.get('/api/courses/post/:year/:month', function (req, res) {
    res.send(req.params); // Returns JSON object containing year and month
});
//we can use '/' instead of '/api/courses' iam not changing all the routes to use /api/courses
// Route to fetch a course by ID
router.get('/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));

    if (!course) {
        res.status(404).send(`The given course was not found: ${req.params.id}`);
        return;
    }

    res.send(course);
});

// Route to add a new course
router.post('/api/courses', (req, res) => {
    // Validate request data using Joi schema
    const result = validateCourse(req.body); // Using function to avoid redundant code

    /*  // Defining validation schema for request body using Joi
        const schema = Joi.object({
            name: Joi.string().min(3).required() // 'name' must be a string, at least 3 characters, and required
        });

        // Validating request body against the schema 
        const { error } = schema.validate(req.body); 
    */

    // Above validation was moved to the `validateCourse()` function for reusability
    const { error } = result; // Get validation error

    // If validation fails, return 400 Bad Request with the error message
    if (error) {
        res.status(400).send(error.details[0].message);
        return; // Stop further execution
    }

    /* if (!req.body.name || req.body.name.length < 3) {
        res.status(400).send('Name is required and should be minimum 3 characters');
        return;
    }*/

    // Above check was replaced with Joi validation for better error handling ✅

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

// Route to update an existing course
router.put('/api/courses/:id', (req, res) => {
    // Lookup the course
    const course = courses.find(c => c.id === parseInt(req.params.id));

    // If not found, return 404
    if (!course) {
        res.status(404).send(`The given course was not found: ${req.params.id}`);
        return;
    }

    // Validate request data
    const result = validateCourse(req.body); // Using function for cleaner code

    /*  const schema = Joi.object({
            name: Joi.string().min(3).required() // 'name' must be a string, at least 3 characters, and required
        });

        const { error } = schema.validate(req.body);
    */

    // The above schema was moved to the `validateCourse()` function ✅

    if (result.error) {
        res.status(400).send(result.error.details[0].message);
        return;
    }

    // Update the course name
    course.name = req.body.name;

    // Respond with the updated course
    res.send(course);
});

// Function to validate course input using Joi
function validateCourse(course) {
    const schema = Joi.object({
        id: Joi.number().integer(), // Allows an optional numeric ID
        name: Joi.string().min(3).required()
    });
    return schema.validate(course);
}
router.delete('/api/courses/:id', (req, res) => {
    // Convert the ID from request params to an integer
    const courseId = parseInt(req.params.id);

    // Find the course by ID
    const course = courses.find(c => c.id === courseId);
    if (!course) {
        return res.status(404).send(`The course with ID ${courseId} was not found.`);
    }

    // Find the index of the course
    const index = courses.indexOf(course);

    // Remove the course from the array
    courses.splice(index, 1);

    // Return the deleted course as response
    res.send(course);
});


module.exports = router;//exporting the router