"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _events = _interopRequireDefault(require("../../events"));

var _client = _interopRequireDefault(require("./client"));

var _queryStr = _interopRequireDefault(require("./queryStr"));

(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
  return _regenerator["default"].wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _client["default"].connect();

        case 2:
          _client["default"].query(_queryStr["default"]);

          _client["default"].query('LISTEN table_update');

          _client["default"].on('notification', _events["default"]);

        case 5:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}))();
//# sourceMappingURL=index.js.map