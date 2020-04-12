"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _models = require("../database/models");

var shopVisitController = {};

shopVisitController.create = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var body, result, shopVisitId, tposmBody, bwuBody, bookBody, stockBody;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            console.log(req.files);
            body = JSON.parse(req.body.shopVisit);
            body["image"] = req.files.shopVisitImage[0].filename;
            _context.next = 6;
            return _models.shopVisit.create(body);

          case 6:
            result = _context.sent;
            shopVisitId = result.dataValues.id;

            if (!(req.body.tposm != null && typeof req.body.tposm != "undefined")) {
              _context.next = 15;
              break;
            }

            tposmBody = JSON.parse(req.body.tposm);
            tposmBody["imageOne"] = req.files.tposmImageOne[0].filename;
            tposmBody["imageTwo"] = req.files.tposmImageTwo[0].filename;
            tposmBody["shopVisitId"] = shopVisitId;
            _context.next = 15;
            return _models.tposm.create(tposmBody);

          case 15:
            if (!(req.body.bwu != null && typeof req.body.bwu != "undefined")) {
              _context.next = 21;
              break;
            }

            bwuBody = JSON.parse(req.body.bwu);
            bwuBody["shopVisitId"] = shopVisitId;
            bwuBody["image"] = req.files.bwuImage[0].filename;
            _context.next = 21;
            return _models.bwu.create(bwuBody);

          case 21:
            if (!(req.body.book != null && typeof req.body.book != "undefined")) {
              _context.next = 27;
              break;
            }

            bookBody = JSON.parse(req.body.book);
            bookBody["shopVisitId"] = shopVisitId;
            bookBody["image"] = req.files.bookImage[0].filename;
            _context.next = 27;
            return _models.book.create(bookBody);

          case 27:
            if (!(req.body.stock != null && typeof req.body.stock != "undefined")) {
              _context.next = 32;
              break;
            }

            stockBody = JSON.parse(req.body.stock);
            stockBody["shopVisitId"] = shopVisitId;
            _context.next = 32;
            return _models.stock.create(stockBody);

          case 32:
            res.status(200).json(result.dataValues.id);
            _context.next = 39;
            break;

          case 35:
            _context.prev = 35;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);
            res.status(400).send(_context.t0);

          case 39:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 35]]);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

module.exports = shopVisitController;
//# sourceMappingURL=shopVisit.js.map