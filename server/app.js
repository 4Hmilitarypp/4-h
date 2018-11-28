/* eslint-disable no-console */
const express = require('express');
const session = require('express-session');
const mongoose = require('mongoose');
const MongoStore = require('connect-mongo')(session);
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const passport = require('passport');
const cors = require('cors');
const promisify = require('es6-promisify');
const flash = require('connect-flash');
const expressValidator = require('express-validator');
const path = require('path');
const helpers = require('./helpers');
const errorHandlers = require('./handlers/errorHandlers');
const setupRoutes = require('./routes');
// const routes = require('./routes/index')

// initialize the application and create the routes
const app = express();

app.use(helmet());

// allow cors so my site can communicate with my back-end.
app.use(cors());

// so that I can look at the body of post requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Exposes a bunch of methods for validating data. Used heavily on userController.validateRegister
app.use(expressValidator());

// Sessions allow us to store data on visitors from request to request
// This keeps users logged in and allows us to send flash messages
app.use(
  session({
    secret: process.env.SECRET,
    key: process.env.KEY,
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
  })
);

// Passport JS is what we use to handle our logins
app.use(passport.initialize());
app.use(passport.session());

/* // promisify some callback based APIs
app.use((req, res, next) => {
  req.login = promisify(req.login, req);
  next();
}); */

setupRoutes(app);

// Serve any static files
app.use(express.static(path.resolve(__dirname, '../client/build'), { maxAge: '30d' }));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'), err => {
    if (err) {
      res.status(500).send(err);
    }
  });
});

// If that above routes didnt work, we 404 them and forward to error handler
app.use(errorHandlers.notFound);

// One of our error handlers will see if these errors are just validation errors
app.use(errorHandlers.validationErrors);

// Otherwise this was a really bad error we didn't expect! Shoot eh
if (app.get('env') === 'development') {
  /* Development Error Handler - Prints stack trace */
  app.use(errorHandlers.developmentErrors);
}

// production error handler
app.use(errorHandlers.productionErrors);

module.exports = app;
