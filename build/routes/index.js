"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _multer = _interopRequireDefault(require("multer"));

var express = require('express');

var router = express.Router();

var controllers = require('../controllers');

var path = require("path");

var storage = _multer["default"].diskStorage({
  destination: function destination(req, file, cb) {
    cb(null, path.join(__dirname, "../public/uploads"));
  },
  filename: function filename(req, file, cb) {
    cb(null, new Date().toISOString() + file.originalname);
  }
});

var fileFilter = function fileFilter(req, file, cb) {
  if (file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

var upload = (0, _multer["default"])({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5
  },
  fileFilter: fileFilter
}); //user

router.post('/user/login', controllers.user.login);
router.post('/admin/login', controllers.user.adminLogin);
router.get('/user/:userId', controllers.user.get);
router.get('/user/:page', controllers.user.getAll);
router.get('/user/:userId/imei', controllers.user.getAllImei);
router.post('/user', controllers.user.create);
router.put('/user/:userId', controllers.user.update);
router["delete"]('/user/:userId', controllers.user["delete"]); // shop

router.get('/shop/:shopId', controllers.shop.get);
router.get('/shop/:page', controllers.shop.getAll);
router.post('/shop', upload.single('image'), controllers.shop.create);
router.post('/shop/:shopId', controllers.shop.addImage);
router.put('/shop/:shopId', controllers.shop.update);
router["delete"]('/shop/:shopId', controllers.shop["delete"]);
router["delete"]('/shop/:shopId', controllers.shop.deleteImage); // //shopAssign

router.post('/assignShop', controllers.shopAssign.create);
router.put('/assignShop/:id', controllers.shopAssign.update);
router.get('/assignShop/:page', controllers.shopAssign.getAll);
router.get('/assignShop/:userId/:day', controllers.shopAssign.getShops); // //shopVisit

router.post('/visitShop', upload.fields([{
  name: 'shopVisitImage',
  maxCount: 1
}, {
  name: 'tposmImageOne',
  maxCount: 1
}, {
  name: 'tposmImageTwo',
  maxCount: 1
}, {
  name: 'bwuImage',
  maxCount: 1
}, {
  name: 'bookImage',
  maxCount: 1
}]), controllers.shopVisit.create); // //tposmItem

router.post('/tposmItem', controllers.tposmItem.create);
router.put('/tposmItem/:itemId', controllers.tposmItem.update);
router["delete"]('/tposmItem/:itemId', controllers.tposmItem["delete"]);
router.get('/tposmItem', controllers.tposmItem.getAll);
router.get('/tposmItem/:itemId', controllers.tposmItem.get); // //stockItem

router.post('/stockItem', controllers.stockItem.create);
router.put('/stockItem/:itemId', controllers.stockItem.update);
router["delete"]('/stockItem/:itemId', controllers.stockItem["delete"]);
router.get('/stockItem', controllers.stockItem.getAll);
router.get('/stockItem/:itemId', controllers.stockItem.get); // //bwuItem

router.post('/bwuItem', controllers.bwuItem.create);
router.put('/bwuItem/:itemId', controllers.bwuItem.update);
router["delete"]('/bwuItem/:itemId', controllers.bwuItem["delete"]);
router.get('/bwuItem', controllers.bwuItem.getAll);
router.get('/bwuItem/:itemId', controllers.bwuItem.get);
module.exports = router;
//# sourceMappingURL=index.js.map