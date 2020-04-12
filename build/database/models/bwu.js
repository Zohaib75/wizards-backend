"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _connection = _interopRequireDefault(require("../connection"));

var bwu = _connection["default"].define('bwu', {
  bwuStatus: _sequelize["default"].JSON,
  image: _sequelize["default"].STRING
});

var _default = bwu;
exports["default"] = _default;
//# sourceMappingURL=bwu.js.map