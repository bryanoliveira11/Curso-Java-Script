const express = require('express');
const app = express();
const routes = require('./routes');
const path = require('path');
// middleware
const {middlewareGlobal} = require('./src/middlewares/middleware');

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, 'public')));

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

// setting a default middleware
app.use(middlewareGlobal);

app.use(routes);

app.listen(8000, () => {
  console.log('Acess http://localhost:8000');
});

