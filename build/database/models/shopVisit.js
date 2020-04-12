"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _connection = _interopRequireDefault(require("../connection"));

var shopVisit = _connection["default"].define('shopVisit', {
  date: _sequelize["default"].DATEONLY,
  startTime: _sequelize["default"].STRING,
  endTime: _sequelize["default"].STRING,
  image: _sequelize["default"].STRING,
  status: _sequelize["default"].STRING
}, {
  timestamps: false
});

var _default = shopVisit;
exports["default"] = _default;
//# sourceMappingURL=shopVisit.js.map