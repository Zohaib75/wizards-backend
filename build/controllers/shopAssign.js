"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _models = require("../database/models");

var shopAssignController = {};

shopAssignController.create = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var body, result;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            body = req.body;
            _context.next = 4;
            return _models.shopAssign.create(body);

          case 4:
            result = _context.sent;
            res.status(200).json(result.dataValues);
            _context.next = 11;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);
            res.status(400).send(_context.t0);

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 8]]);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

shopAssignController.update = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var body, result;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            body = req.body;
            _context2.next = 4;
            return _models.shopAssign.update(body, {
              where: {
                id: req.params.id
              }
            });

          case 4:
            result = _context2.sent;
            res.status(200).json(result);
            _context2.next = 11;
            break;

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](0);
            res.status(400).send(_context2.t0);

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 8]]);
  }));

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

shopAssignController.getAll = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var pageNo, offset, limit, result;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            pageNo = req.params.page;
            offset = (pageNo - 1) * 15;
            limit = 15;
            _context3.next = 6;
            return _models.shopAssign.findAll({
              offset: offset,
              limit: limit
            });

          case 6:
            result = _context3.sent;
            res.status(200).json(result);
            _context3.next = 13;
            break;

          case 10:
            _context3.prev = 10;
            _context3.t0 = _context3["catch"](0);
            res.status(400).send(_context3.t0);

          case 13:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 10]]);
  }));

  return function (_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

shopAssignController.getShops = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var result;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return _models.shop.findAll({
              where: {
                visitDay: req.params.day
              },
              attributes: {
                include: [['id', 'shopId']],
                exclude: ['id', 'visitDay', 'createdAt', 'updatedAt']
              },
              include: [{
                association: 'shopAssignUsers',
                where: {
                  id: req.params.userId
                },
                attributes: {
                  include: [['id', 'userId']],
                  exclude: ['id', 'username', 'password', 'mobile', 'imei', 'role', 'zone', 'region', 'createdAt', 'updatedAt']
                }
              }]
            });

          case 3:
            result = _context4.sent;
            res.status(200).json(result);
            _context4.next = 11;
            break;

          case 7:
            _context4.prev = 7;
            _context4.t0 = _context4["catch"](0);
            console.log(_context4.t0);
            res.status(400).send(_context4.t0);

          case 11:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 7]]);
  }));

  return function (_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

module.exports = shopAssignController;
//# sourceMappingURL=shopAssign.js.map