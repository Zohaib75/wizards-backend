"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _connection = _interopRequireDefault(require("../connection"));

var stock = _connection["default"].define('stock', {
  stockStatus: _sequelize["default"].JSON
});

var _default = stock;
exports["default"] = _default;
//# sourceMappingURL=stock.js.map