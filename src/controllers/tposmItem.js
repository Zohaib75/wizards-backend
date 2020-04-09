import { tposmItem } from '../database/models';
var tposmItemController = {};

tposmItemController.get = async (req, res) => {
    try {
        const result = await tposmItem.findByPk(req.params.itemId);
        res.status(200).json(result);
    } catch (error) {
        res.status(400).send(error);
    }
}

tposmItemController.getAll = async (req, res) => {
    try {
        let pageNo = req.params.page;
        let offset = (pageNo - 1) * 15;
        let limit = 15;
        const result = await tposmItem.findAll({ offset, limit });
        res.status(200).json(result);
    } catch (error) {
        res.status(400).send(error);
    }
}

tposmItemController.create = async (req, res) => {
    try {
        let body = req.body;
        const result = await tposmItem.create(body);
        res.status(200).json(result.dataValues.id);
    }
    catch (error) {
        res.status(400).send(error);
    }
}

tposmItemController.update = async (req, res) => {
    try {
        let body = req.body;
        const result = await tposmItem.update(body, {
            where: {
                id: req.params.itemId
            }
        });
        res.status(200).json(result);
    } catch (error) {
        res.status(400).send(error);
    }
}

tposmItemController.delete = async (req, res) => {
    try {
        const result = await tposmItem.destroy({
            where: {
                id: req.params.itemId
            }
        });
        res.status(200).json(result);
    } catch (error) {
        res.status(400).send(error);
    }
}


module.exports = tposmItemController;