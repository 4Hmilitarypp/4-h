/* eslint-disable no-console */
// TODO import RedisStore from 'connect-redis'
import cors from 'cors'
import express from 'express'
import session from 'express-session'
import expressValidator from 'express-validator'
import helmet from 'helmet'
import passport from 'passport'
import path from 'path'
import * as errorHandlers from './handlers/errorHandlers'
import setupRoutes from './routes'

// TODO RedisStore(session)
// initialize the application and create the routes
const app = express()

// sets various http headers https://github.com/helmetjs/helmet
app.use(helmet())

// allow cors so my site can communicate with my back-end.
// ! Configure this in production so only correct people can access it
const corsOptions = {
  origin: [process.env.FRONTEND_URL || '', process.env.NODE_ENV === 'dev' ? 'http://localhost:2323' : ''],
}
app.use(cors(corsOptions))

// so that I can look at the body of post requests
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Exposes a bunch of methods for validating data. Used heavily on userController.validateRegister
app.use(expressValidator())

// TODO const store = new (RedisStore as any)({ host: 'localhost', pass: process.env.REDIS_PASSWORD || 'secret', port: 6379 })

// Sessions allow us to store data on visitors from request to request
// This keeps users logged in and allows us to send flash messages
app.use(
  session({
    cookie: {
      maxAge: 1000 * 60 * 60 * 2,
      sameSite: true,
      secure: process.env.NODE_ENV === 'prod',
    },
    name: 'sid',
    resave: false,
    saveUninitialized: false,
    secret: process.env.SESSION_SECRET || 'secret',
    // store,
  })
)

// Passport JS is what we use to handle our logins
app.use(passport.initialize())
app.use(passport.session())

/* // promisify some callback based APIs
app.use((req, res, next) => {
  req.login = promisify(req.login, req);
  next();
}); */

// pass the app to our routes to set them up
setupRoutes(app)

// Serve any static files
app.use(express.static(path.resolve(__dirname, '../../client/build'), { maxAge: '30d' }))
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../client/build/index.html'), (err: Error) => {
    if (err) {
      res.status(500).send(err)
    }
  })
})

// If that above routes didn't work, we 404 them and forward to error handler
app.use(errorHandlers.routeNotFound)

// if an item can't be found in the database
app.use(errorHandlers.itemNotFound)

// check if errors are mongoDB validation errors
app.use(errorHandlers.validationErrors)

// check if errors are mongoDB cast errors
app.use(errorHandlers.castErrors)

// Programmer error handling in dev
if (process.env.NODE_ENV === 'dev') {
  /* Development Error Handler - Prints stack trace */
  app.use(errorHandlers.developmentErrors)
}

// production error handling in prod, will stop the process!
app.use(errorHandlers.productionErrors)

export default app
