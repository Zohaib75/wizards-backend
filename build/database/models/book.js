"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _connection = _interopRequireDefault(require("../connection"));

var book = _connection["default"].define('book', {
  bookStatus: _sequelize["default"].STRING,
  image: _sequelize["default"].STRING
});

var _default = book;
exports["default"] = _default;
//# sourceMappingURL=book.js.map