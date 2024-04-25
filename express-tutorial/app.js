// Importing required modules
const express = require('express');

// Create an instance of Express application
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Array to store todo items (dummy data)
let todos = [
    { id: 1, text: 'Learn Express.js', done: false },
    { id: 2, text: 'Build a RESTful API', done: false }
];

// Route handler for the root URL
app.get('/', (req, res) => {
    res.send('Welcome to the Todo API!');
});

// Routes...

// Start the Express server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
