// require/import all the things
const express = require('express');
// you only need this if you want to hash passwords
const argon2 = require('argon2');
require('dotenv').config();
const cors = require('cors');

const config = require('./config');
const db = require('./db');

// define the app/server/whatever
const server = express();

/*
 Middleware
 */
// use cors if needed
server.use(cors());
// use expres json parser because body-parser sucks
server.use(express.json());

// some sort of request logger
const requestLogger = (req, res, next) =>
{
    const now = new Date();
    console.log(`${now}:::> Incoming request to ${req.originalUrl}`)
    next();
}

server.use(requestLogger);

// import your DAO things

// Using Mongoose
//const Sample = require('./api/samplemodel/sample.dao');

// Using native mongodb
const genericDAO = require('./api/samplemodel/mongo.dao');

// import what is essential our router factory function
const routerFactory = require('./api/router');
 /*
 Routes
 */
//server.use('/', routerFactory(Sample));
server.use('/', routerFactory(genericDAO('tasks')));

 /*
 Make server listen
 */
// You need to define a PORT value in you .env file
// or this will default to port 3000
// Heroku AND Netlify will randomly assign you a port, you don't
// get to pick
server.listen(process.env.PORT || 3000, (err) =>
{
    if (err)
    {
        console.log('Error starting server: ', err);
    }
    console.log(`Server listening on port ${process.env.PORT}...`);
});
