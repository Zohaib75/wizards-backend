"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _pg = require("pg");

var _process = require("process");

var DATABASE_NAME = _process.env.DATABASE_NAME,
    DATABASE_USERNAME = _process.env.DATABASE_USERNAME,
    DATABASE_PASSWORD = _process.env.DATABASE_PASSWORD,
    DATABASE_HOST = _process.env.DATABASE_HOST;

var _default = new _pg.Client({
  user: DATABASE_USERNAME,
  host: DATABASE_HOST,
  database: DATABASE_NAME,
  password: DATABASE_PASSWORD
});

exports["default"] = _default;
//# sourceMappingURL=client.js.map