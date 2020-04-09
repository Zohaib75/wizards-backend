import { shopVisit, tposm, bwu, book, stock } from '../database/models';
var shopVisitController = {};

shopVisitController.create = async (req, res) => {
    try {
        console.log(typeof req.body.shopVisit);
        let body = JSON.parse(req.body.shopVisit);
        console.log(body);
        const result = await shopVisit.create(body);
        let shopVisitId = result.dataValues.id;

        if (req.body.tposm != null && typeof req.body.tposm != "undefined") {
            let tposmBody = JSON.parse(req.body.tposm);
            tposmBody["shopVisitId"] = shopVisitId;
            await tposm.create(tposmBody);
        }

        if (req.body.bwu != null && typeof req.body.bwu != "undefined") {
            let bwuBody = JSON.parse(req.body.bwu);
            bwuBody["shopVisitId"] = shopVisitId;
            await bwu.create(bwuBody);
        }

        if (req.body.book != null && typeof req.body.book != "undefined") {
            let bookBody = JSON.parse(req.body.book);
            bookBody["shopVisitId"] = shopVisitId;
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