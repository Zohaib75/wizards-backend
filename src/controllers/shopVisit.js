import { shopVisit, tposm, bwu, book, stock } from '../database/models';
var shopVisitController = {};

shopVisitController.create = async (req, res) => {
    try {
        console.log(req.files);
        let body = JSON.parse(req.body.shopVisit);
        body["image"] = req.files.shopVisitImage[0].filename;
        const result = await shopVisit.create(body);
        let shopVisitId = result.dataValues.id;

        if (req.body.tposm != null && typeof req.body.tposm != "undefined") {
            let tposmBody = JSON.parse(req.body.tposm);
            tposmBody["imageOne"] = req.files.tposmImageOne[0].filename;
            tposmBody["imageTwo"] = req.files.tposmImageTwo[0].filename;
            tposmBody["shopVisitId"] = shopVisitId;
            await tposm.create(tposmBody);
        }

        if (req.body.bwu != null && typeof req.body.bwu != "undefined") {
            let bwuBody = JSON.parse(req.body.bwu);
            bwuBody["shopVisitId"] = shopVisitId;
            bwuBody["image"] = req.files.bwuImage[0].filename;
            await bwu.create(bwuBody);
        }

        if (req.body.book != null && typeof req.body.book != "undefined") {
            let bookBody = JSON.parse(req.body.book);
            bookBody["shopVisitId"] = shopVisitId;
            bookBody["image"] = req.files.bookImage[0].filename;

            await book.create(bookBody);
        }

        if (req.body.stock != null && typeof req.body.stock != "undefined") {
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