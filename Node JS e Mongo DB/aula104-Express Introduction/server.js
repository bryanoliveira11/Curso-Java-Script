const express = require('express');

// loading express
const app = express();

// routes
app.get('/', (req, res) => {
    res.send('hello world');
})

app.get('/contact', (req, res) => {
    res.send('contact page');
})

app.listen(3000, () => {console.log('server running')});