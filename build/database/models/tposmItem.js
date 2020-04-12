"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _connection = _interopRequireDefault(require("../connection"));

var tposmItem = _connection["default"].define('tposmItem', {
  item: _sequelize["default"].STRING
});

var _default = tposmItem;
exports["default"] = _default;
//# sourceMappingURL=tposmItem.js.map