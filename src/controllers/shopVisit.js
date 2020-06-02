import { shopVisit, tposm, bwu, book, stock } from '../database/models';
var shopVisitController = {};

shopVisitController.create = async (req, res) => {
    try {
        console.log("req: ", req.body);
        console.log(req.files);
        let body = JSON.parse(req.body.shopVisit);
        if (typeof req.files.shopVisitImage != 'undefined')
            body["image"] = req.files.shopVisitImage[0].filename;

        const result = await shopVisit.create(body);
        let shopVisitId = result.dataValues.id;

        if (req.body.tposm != null && req.body.tposm != '' && typeof req.body.tposm != "undefined" ) {
            let tposmBody = JSON.parse(req.body.tposm);
            if (typeof req.files.tposmImageOne != 'undefined')
                tposmBody["imageOne"] = req.files.tposmImageOne[0].filename;
            if (typeof req.files.tposmImageTwo != 'undefined')
                tposmBody["imageTwo"] = req.files.tposmImageTwo[0].filename;

            tposmBody["shopVisitId"] = shopVisitId;
            await tposm.create(tposmBody);
        }

        if (req.body.bwu != null && req.body.bwu != '' && typeof req.body.bwu != "undefined") {
            let bwuBody = JSON.parse(req.body.bwu);
            bwuBody["shopVisitId"] = shopVisitId;

            if (typeof req.files.bwuImage != 'undefined')
                bwuBody["image"] = req.files.bwuImage[0].filename;

            await bwu.create(bwuBody);
        }

        if (req.body.book != null && req.body.book != '' && typeof req.body.book != "undefined") {
            let bookBody = JSON.parse(req.body.book);
            bookBody["shopVisitId"] = shopVisitId;

            if (typeof req.files.bookImage != 'undefined')
                bookBody["image"] = req.files.bookImage[0].filename;

            await book.create(bookBody);
        }

        if (req.body.stock != null && req.body.stock != '' && typeof req.body.stock != "undefined") {
            let stockBody = JSON.parse(req.body.stock);
            stockBody["shopVisitId"] = shopVisitId;
            await stock.create(stockBody);
        }

        res.status(200).json(result.dataValues.id);
    }
    catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
}

module.exports = shopVisitController;