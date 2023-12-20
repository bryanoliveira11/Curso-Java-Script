const express = require('express');
const route = express.Router();

// importing controller
const homeController = require('./src/controllers/homeController');
const contactController = require('./src/controllers/contactController');

// routes that come from the controller
route.get('/', homeController.homePage);
route.post('/', homeController.doPost);

// contact routes
route.get('/contact', contactController.homePage);

// exporting the routes to use on the server.js
module.exports = route;