"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _connection = _interopRequireDefault(require("../connection"));

var tposm = _connection["default"].define('tposm', {
  tposmData: _sequelize["default"].JSON,
  imageOne: _sequelize["default"].STRING,
  imageTwo: _sequelize["default"].STRING
});

var _default = tposm;
exports["default"] = _default;
//# sourceMappingURL=tposm.js.map