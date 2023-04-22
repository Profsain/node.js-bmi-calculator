const express = require('express'); // Import express
const bodyParser = require('body-parser'); // Import body-parser

const app = express(); // Create express app
app.use(bodyParser.urlencoded({ extended: true })); // Use body-parser

// Add a route
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// bmi route
app.get('/bmi', (req, res) => {
    res.sendFile(__dirname + '/bmi.html');
});

// bmi post route
app.post('/bmi', (req, res) => {
    let weight = Number(req.body.weight);
    let height = Number(req.body.height);
    let bmi = weight / (height * height);
    bmi = bmi.toFixed();

    res.send(`Your BMI is ${bmi} kg/m2`);
});

// Start the server
app.listen(3800, () => console.log('Server started on port 3800'));
