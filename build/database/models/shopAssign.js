"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _connection = _interopRequireDefault(require("../connection"));

var _shop = _interopRequireDefault(require("./shop"));

var _user = _interopRequireDefault(require("./user"));

var shopAssign = _connection["default"].define('shopAssign', {
  id: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  userId: {
    type: _sequelize["default"].INTEGER,
    references: {
      model: _user["default"],
      key: 'id'
    }
  },
  shopId: {
    type: _sequelize["default"].INTEGER,
    references: {
      model: _shop["default"],
      key: 'id'
    }
  },
  status: {
    type: _sequelize["default"].ENUM,
    values: ['assigned', 'unassigned']
  }
});

var _default = shopAssign;
exports["default"] = _default;
//# sourceMappingURL=shopAssign.js.map