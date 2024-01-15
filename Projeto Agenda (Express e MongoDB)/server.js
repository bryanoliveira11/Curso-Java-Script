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


// setting up the session, mongo and flash
const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');

const routes = require('./routes');
const path = require('path');

// helmet config
const helmet = require('helmet');

// Csurf (CSRF) config
const csrf = require('csurf');

// middleware
const { middlewareGlobal, checkCsrfError, csrfMiddleware } = require('./src/middlewares/middleware');

app.use(helmet());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, 'public')));

// session options
app.use(session({
  secret: process.env.SESSIONSECRET,
  store: MongoStore.create({ mongoUrl: connectionString }),
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days
    httpOnly: true
  }
}));
app.use(flash());

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(csrf());

// setting a default middleware
app.use(middlewareGlobal);

// csrf middlewares
app.use(checkCsrfError);
app.use(csrfMiddleware);

app.use(routes);

// executing the server with the 'OK' signal emited by the mongoose.connect
app.on('OK', () => {
  app.listen(8000, () => {
    console.log('Acess http://localhost:8000');
  });
})


