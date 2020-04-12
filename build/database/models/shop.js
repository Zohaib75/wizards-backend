"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _connection = _interopRequireDefault(require("../connection"));

var shop = _connection["default"].define('shop', {
  shopCode: _sequelize["default"].STRING,
  name: _sequelize["default"].STRING,
  area: _sequelize["default"].STRING,
  owner: _sequelize["default"].STRING,
  mobile: _sequelize["default"].STRING,
  address: _sequelize["default"].STRING,
  city: _sequelize["default"].STRING,
  province: _sequelize["default"].STRING,
  lat: _sequelize["default"].STRING,
  "long": _sequelize["default"].STRING,
  classification: _sequelize["default"].STRING,
  category: _sequelize["default"].STRING,
  image: _sequelize["default"].STRING,
  visitDay: {
    type: _sequelize["default"].ENUM,
    values: ['mon', 'tue', 'wed', 'thu', 'fri', 'sat']
  }
});

var _default = shop;
exports["default"] = _default;
//# sourceMappingURL=shop.js.map