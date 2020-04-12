"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _connection = _interopRequireDefault(require("../connection"));

var stockItem = _connection["default"].define('stockItem', {
  item: _sequelize["default"].STRING
});

var _default = stockItem;
exports["default"] = _default;
//# sourceMappingURL=stockItem.js.map