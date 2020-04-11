import { bwuItem } from '../database/models';
var bwuItemController = {};

bwuItemController.get = async (req, res) => {
    try {
        const result = await bwuItem.findByPk(req.params.itemId);
        res.status(200).json(result);
    } catch (error) {
        res.status(400).send(error);
    }
}

bwuItemController.getAll = async (req, res) => {
    try {
        const result = await bwuItem.findAll();
        res.status(200).json(result);
    } catch (error) {
        res.status(400).send(error);
    }
}

bwuItemController.create = async (req, res) => {
    try {
        let body = req.body;
        const result = await bwuItem.create(body);
        res.status(200).json(result.dataValues.id);
    }
    catch (error) {
        res.status(400).send(error);
    }
}

bwuItemController.update = async (req, res) => {
    try {
        let body = req.body;
        const result = await bwuItem.update(body, {
            where: {
                id: req.params.itemId
            }
        });
        res.status(200).json(result);
    } catch (error) {
        res.status(400).send(error);
    }
}

bwuItemController.delete = async (req, res) => {
    try {
        const result = await bwuItem.destroy({
            where: {
                id: req.params.itemId
            }
        });
        res.status(200).json(result);
    } catch (error) {
        res.status(400).send(error);
    }
}


module.exports = bwuItemController;