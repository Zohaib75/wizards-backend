"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "user", {
  enumerable: true,
  get: function get() {
    return _user["default"];
  }
});
Object.defineProperty(exports, "shop", {
  enumerable: true,
  get: function get() {
    return _shop["default"];
  }
});
Object.defineProperty(exports, "shopAssign", {
  enumerable: true,
  get: function get() {
    return _shopAssign["default"];
  }
});
Object.defineProperty(exports, "shopVisit", {
  enumerable: true,
  get: function get() {
    return _shopVisit["default"];
  }
});
Object.defineProperty(exports, "tposm", {
  enumerable: true,
  get: function get() {
    return _tposm["default"];
  }
});
Object.defineProperty(exports, "bwu", {
  enumerable: true,
  get: function get() {
    return _bwu["default"];
  }
});
Object.defineProperty(exports, "book", {
  enumerable: true,
  get: function get() {
    return _book["default"];
  }
});
Object.defineProperty(exports, "stock", {
  enumerable: true,
  get: function get() {
    return _stock["default"];
  }
});
Object.defineProperty(exports, "tposmItem", {
  enumerable: true,
  get: function get() {
    return _tposmItem["default"];
  }
});
Object.defineProperty(exports, "stockItem", {
  enumerable: true,
  get: function get() {
    return _stockItem["default"];
  }
});
Object.defineProperty(exports, "bwuItem", {
  enumerable: true,
  get: function get() {
    return _bwuItem["default"];
  }
});

var _user = _interopRequireDefault(require("./user"));

var _shop = _interopRequireDefault(require("./shop"));

var _shopAssign = _interopRequireDefault(require("./shopAssign"));

var _shopVisit = _interopRequireDefault(require("./shopVisit"));

var _tposm = _interopRequireDefault(require("./tposm"));

var _bwu = _interopRequireDefault(require("./bwu"));

var _book = _interopRequireDefault(require("./book"));

var _stock = _interopRequireDefault(require("./stock"));

var _tposmItem = _interopRequireDefault(require("./tposmItem"));

var _stockItem = _interopRequireDefault(require("./stockItem"));

var _bwuItem = _interopRequireDefault(require("./bwuItem"));

_user["default"].belongsToMany(_shop["default"], {
  through: 'shopAssign',
  as: 'shopAssignShops'
});

_shop["default"].belongsToMany(_user["default"], {
  through: 'shopAssign',
  as: 'shopAssignUsers'
});

_shopAssign["default"].hasMany(_shopVisit["default"]);

_shopVisit["default"].belongsTo(_shopAssign["default"]);

_shopVisit["default"].hasOne(_tposm["default"]);

_shopVisit["default"].hasOne(_bwu["default"]);

_shopVisit["default"].hasOne(_book["default"]);

_shopVisit["default"].hasOne(_stock["default"]);

_tposm["default"].belongsTo(_shopVisit["default"]);

_bwu["default"].belongsTo(_shopVisit["default"]);

_book["default"].belongsTo(_shopVisit["default"]);

_stock["default"].belongsTo(_shopVisit["default"]);
//# sourceMappingURL=index.js.map