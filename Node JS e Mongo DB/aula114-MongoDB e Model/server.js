// configuring dotenv
require('dotenv').config();

const express = require('express');
const app = express();

// connecting to a mongodb atlas database using mongoose lib
const mongoose = require('mongoose');
const connectionString = process.env.CONNECTIONSTRING;

mongoose.connect(connectionString).then(() => {
  // using emit to throw a signal for the app
  app.emit('OK');
}).catch(err => console.log(err));


const routes = require('./routes');
const path = require('path');

// middleware
const { middlewareGlobal } = require('./src/middlewares/middleware');

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, 'public')));

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

// setting a default middleware
app.use(middlewareGlobal);

app.use(routes);

// executing the server with the 'OK' signal emited by the mongoose.connect
app.on('OK', () => {
  app.listen(8000, () => {
    console.log('Acess http://localhost:8000');
  });
})


