const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
var cookieParser = require("cookie-parser");

import createSeedData from './database/seeders/seedData';
import connection from './database/connection';

const app = express();
app.use(helmet());
app.disable('x-powered-by');
app.use(cors()); // check for production changes
app.use(express.json()); //This is a built-in middleware function in Express. It parses incoming requests with JSON payloads
app.use(express.urlencoded({ extended: false })); //It parses incoming requests with urlencoded payloads

// app.use(bodyParser.urlencoded({ limit: '2mb', extended: false }))
// app.use(bodyParser.json({ limit: '2mb' }))


app.use(cookieParser());

const routes = require("./routes");
app.use(routes);


// const passport = require("passport");
// app.use(passport.initialize());
// require("./middlewares/auth");

// const headerMiddleware = require("./middlewares/HeaderMiddleware");
// app.use(headerMiddleware);

const port = process.env.PORT || 3000;
connection.sync().then(function () {
    createSeedData();
    app.listen(port);
    app.on('error', onError);
    app.on('listening', onListening);
});

function onError(error) {
    throw error;
}

function onListening() {
    console.log(`Listening on Port ${port}`)
}

module.exports = app;
