const express = require('express');
const app = express();
const joi = require('joi');
app.use(express.json());
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
app.post('/api/courses', (req, res) => {
    schema = {
        name: joi.string().min(3).required()
    };
    const result = joi.validate(req.body, schema);
    console.log(result);
    if (result.error) {
        res.status(400).send(result.error.details[0].message);
        return;
    }

    if (!req.body.name || req.body.name.length < 3) {
        res.status(400).send('Name is required and should be minimum 3 characters');
        return;
    }

    const course = {
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(course);
    res.send(course);
});
//port is an environment variable in which we can store the port number and which process is running
const port = process.env.PORT || 3000;
app.listen(3000, () => console.log(`Listening on port ${port}...`));