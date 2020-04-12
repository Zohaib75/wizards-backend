"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _connection = _interopRequireDefault(require("../connection"));

var user = _connection["default"].define('user', {
  username: _sequelize["default"].STRING,
  password: _sequelize["default"].STRING,
  mobile: _sequelize["default"].STRING,
  imei: _sequelize["default"].JSON,
  role: _sequelize["default"].ENUM('admin', 'agent', 'supervisor', 'merchandiser'),
  zone: _sequelize["default"].STRING,
  region: _sequelize["default"].STRING
});

var _default = user;
exports["default"] = _default;
//# sourceMappingURL=user.js.map