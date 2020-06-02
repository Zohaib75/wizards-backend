var express = require('express')
var router = express.Router()
var controllers = require('../controllers')
const path = require("path");
import multer from 'multer';

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, "../public/uploads"));
    },
    filename: function (req, file, cb) {
        cb(null, new Date().toISOString() + file.originalname);
    }
});

const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true);
    }
    else {
        cb(null, false);
    }
}
const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5
    },
    fileFilter: fileFilter
});

//test
router.post('/test', upload.single('image'), (req, res) => {
    try {
        if (req.file)
            res.send("Image Uploaded");
        else
            res.status(400).send("No image Found");
    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
});

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
router.get('/shop/image/:shopId', controllers.shop.getImage)
router.post('/shop', upload.single('image'), controllers.shop.create);
router.post('/shop/:shopId', controllers.shop.addImage);
router.put('/shop/:shopId', controllers.shop.update);
router.delete('/shop/:shopId', controllers.shop.delete);
router.delete('/shop/:shopId', controllers.shop.deleteImage);

// //shopAssign
router.post('/assignShop', controllers.shopAssign.create);
router.put('/assignShop/:id', controllers.shopAssign.update);
router.get('/assignShop/:page', controllers.shopAssign.getAll);
router.get('/assignShop/:userId/:day', controllers.shopAssign.getShops);

// //shopVisit
router.post('/visitShop', upload.fields([
    { name: 'shopVisitImage', maxCount: 1 },
    { name: 'tposmImageOne', maxCount: 1 },
    { name: 'tposmImageTwo', maxCount: 1 },
    { name: 'bwuImage', maxCount: 2 },
    { name: 'bookImage', maxCount: 1 },
]), controllers.shopVisit.create);

// //tposmItem
router.post('/tposmItem', controllers.tposmItem.create);
router.put('/tposmItem/:itemId', controllers.tposmItem.update);
router.delete('/tposmItem/:itemId', controllers.tposmItem.delete);
router.get('/tposmItem', controllers.tposmItem.getAll);
router.get('/tposmItem/:itemId', controllers.tposmItem.get);

// //stockItem
router.post('/stockItem', controllers.stockItem.create);
router.put('/stockItem/:itemId', controllers.stockItem.update);
router.delete('/stockItem/:itemId', controllers.stockItem.delete);
router.get('/stockItem', controllers.stockItem.getAll);
router.get('/stockItem/:itemId', controllers.stockItem.get);

// //bwuItem
router.post('/bwuItem', controllers.bwuItem.create);
router.put('/bwuItem/:itemId', controllers.bwuItem.update);
router.delete('/bwuItem/:itemId', controllers.bwuItem.delete);
router.get('/bwuItem', controllers.bwuItem.getAll);
router.get('/bwuItem/:itemId', controllers.bwuItem.get);


module.exports = router;