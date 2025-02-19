const express = require('express'); // Importing Express framework
const router = express.Router();


// Basic GET request to check if the server is running
router.get('/', (req, res) => {
    res.render('index', { title: 'Hello express router', message: 'Welcome to express router' });
})

router.get('//', (req, res) => {
    res.send('Hello World123456789'); // A simple response to test the server
});

module.exports = router;