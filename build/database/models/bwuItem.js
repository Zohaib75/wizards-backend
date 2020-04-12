"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _connection = _interopRequireDefault(require("../connection"));

var bwuItem = _connection["default"].define('bwuItem', {
  type: _sequelize["default"].STRING
});

var _default = bwuItem;
exports["default"] = _default;
//# sourceMappingURL=bwuItem.js.map