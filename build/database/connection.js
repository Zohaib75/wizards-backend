"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _process = require("process");

var _require = require('sequelize'),
    Sequelize = _require.Sequelize;

require("dotenv").config();

var DATABASE_NAME = _process.env.DATABASE_NAME,
    DATABASE_USERNAME = _process.env.DATABASE_USERNAME,
    DATABASE_PASSWORD = _process.env.DATABASE_PASSWORD,
    DATABASE_HOST = _process.env.DATABASE_HOST,
    DATABASE_URL = _process.env.DATABASE_URL;
var connection;

if (DATABASE_URL) {
  connection = new Sequelize(DATABASE_URL, {
    dialect: 'postgres'
  });
} else {
  connection = new Sequelize(DATABASE_NAME, DATABASE_USERNAME, DATABASE_PASSWORD, {
    host: DATABASE_HOST,
    dialect: 'postgres'
  });
}

var _default = connection;
exports["default"] = _default;
//# sourceMappingURL=connection.js.map