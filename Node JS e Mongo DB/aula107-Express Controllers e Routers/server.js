const express = require('express');
const app = express();
const routes = require('./routes');

app.use(express.urlencoded({ extended: true }));
// using the routes
app.use(routes);

app.listen(3000, () => { console.log('server running') });
