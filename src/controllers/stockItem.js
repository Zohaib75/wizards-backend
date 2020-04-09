import { stockItem } from '../database/models';
var stockItemController = {};

stockItemController.get = async (req, res) => {
    try {
        const result = await stockItem.findByPk(req.params.itemId);
        res.status(200).json(result);
    } catch (error) {
        res.status(400).send(error);
    }
}

stockItemController.getAll = async (req, res) => {
    try {
        let pageNo = req.params.page;
        let offset = (pageNo - 1) * 15;
        let limit = 15;
        const result = await stockItem.findAll({ offset, limit });
        res.status(200).json(result);
    } catch (error) {
        res.status(400).send(error);
    }
}

stockItemController.create = async (req, res) => {
    try {
        let body = req.body;
        const result = await stockItem.create(body);
        res.status(200).json(result.dataValues.id);
    }
    catch (error) {
        res.status(400).send(error);
    }
}

stockItemController.update = async (req, res) => {
    try {
        let body = req.body;
        const result = await stockItem.update(body, {
            where: {
                id: req.params.itemId
            }
        });
        res.status(200).json(result);
    } catch (error) {
        res.status(400).send(error);
    }
}

stockItemController.delete = async (req, res) => {
    try {
        const result = await stockItem.destroy({
            where: {
                id: req.params.itemId
            }
        });
        res.status(200).json(result);
    } catch (error) {
        res.status(400).send(error);
    }
}


module.exports = stockItemController;