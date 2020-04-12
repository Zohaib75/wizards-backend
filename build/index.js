"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _seedData = _interopRequireDefault(require("./database/seeders/seedData"));

var _connection = _interopRequireDefault(require("./database/connection"));

var express = require("express");

var helmet = require("helmet");

var cors = require("cors");

var cookieParser = require("cookie-parser");

var path = require("path");

var app = express();
app.use(helmet());
app.disable('x-powered-by');
app.use(cors()); // check for production changes

app.use(express.json()); //This is a built-in middleware function in Express. It parses incoming requests with JSON payloads

app.use(express.urlencoded({
  extended: false
})); //It parses incoming requests with urlencoded payloads

app.use(express["static"](path.join(__dirname + '/public/uploads'))); // app.use(bodyParser.urlencoded({ limit: '2mb', extended: false }))
// app.use(bodyParser.json({ limit: '2mb' }))

app.use(cookieParser());

var routes = require("./routes");

app.use('/api', routes);
// const passport = require("passport");
// app.use(passport.initialize());
// require("./middlewares/auth");
// const headerMiddleware = require("./middlewares/HeaderMiddleware");
// app.use(headerMiddleware);
var port = process.env.PORT || 3000;

_connection["default"].sync().then(function () {
  (0, _seedData["default"])();
  app.listen(port);
  app.on('error', onError);
  app.on('listening', onListening);
});

function onError(error) {
  throw error;
}

function onListening() {
  console.log("Listening on Port ".concat(port));
}

module.exports = app;
//# sourceMappingURL=index.js.map