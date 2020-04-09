var express = require('express')
var router = express.Router()
var controllers = require('../controllers')

console.log(controllers.user.get)
//user
router.post('/user/login', controllers.user.login);
router.post('/admin/login', controllers.user.adminLogin);
router.get('/user/:userId', controllers.user.get);
router.get('/user/:page', controllers.user.getAll);
router.get('/user/:userId/imei', controllers.user.getAllImei);
router.post('/user', controllers.user.create);
router.put('/user/:userId', controllers.user.update);
router.delete('/user/:userId', controllers.user.delete);


// shop
router.get('/shop/:shopId', controllers.shop.get);
router.get('/shop/:page', controllers.shop.getAll);
router.post('/shop', controllers.shop.create);
router.post('/shop/:shopId', controllers.shop.addImage);
router.put('/shop/:shopId', controllers.shop.update);
router.delete('/shop/:shopId', controllers.shop.delete);
router.delete('/shop/:shopId', controllers.shop.deleteImage);

// //shopAssign
router.post('/assignShop', controllers.shopAssign.create);
router.put('/unassignShop/:id', controllers.shopAssign.update);
router.get('/assignShop/:page', controllers.shopAssign.getAll);

// //shopVisit
router.post('/visitShop', controllers.shopVisit.create);

// //tposmItem
router.post('/tposmItem', controllers.tposmItem.create);
router.put('/tposmItem/:itemId', controllers.tposmItem.update);
router.delete('/tposmItem/:itemId', controllers.tposmItem.delete);
router.get('/tposmItem/:page', controllers.tposmItem.getAll);
router.get('/tposmItem/:itemId', controllers.tposmItem.get);

// //stockItem
router.post('/stockItem', controllers.stockItem.create);
router.put('/stockItem/:itemId', controllers.stockItem.update);
router.delete('/stockItem/:itemId', controllers.stockItem.delete);
router.get('/stockItem/:page', controllers.stockItem.getAll);
router.get('/stockItem/:itemId', controllers.stockItem.get);



module.exports = router;