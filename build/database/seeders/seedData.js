"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _index = require("../models/index");

var _default = /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
  var selectedUser;
  return _regenerator["default"].wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _index.user.findByPk(1);

        case 2:
          selectedUser = _context.sent;

          if (selectedUser) {
            _context.next = 7;
            break;
          }

          _context.next = 6;
          return _index.user.create({
            username: 'admin',
            password: 'admin123',
            role: 'admin'
          });

        case 6:
          selectedUser = _context.sent;

        case 7:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}));

exports["default"] = _default;
//# sourceMappingURL=seedData.js.map