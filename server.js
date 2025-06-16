const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Basic routes
app.get('/', (req, res) => {
    res.send('Welcome to the Node.js server!');
});

app.get('/api/time', (req, res) => {
    res.json({ time: new Date().toISOString() });
});

app.post('/api/echo', (req, res) => {
    res.json({ 
        message: 'Received your data',
        data: req.body 
    });
});

// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
    console.log('Try these endpoints:');
    console.log('- GET /');
    console.log('- GET /api/time');
    console.log('- POST /api/echo');
});
