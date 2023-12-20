const express = require('express');
const app = express();
const routes = require('./routes');
const path = require('path');

app.use(express.urlencoded({ extended: true }));

// setting the static folder path
app.use(express.static(path.resolve(__dirname, 'public')));

// setting the views
app.set('views', path.resolve(__dirname, 'src', 'views'));

// setting the engine
app.set('view engine', 'ejs');

// using the routes
app.use(routes);

app.listen(8000, () => { console.log('server running') });
