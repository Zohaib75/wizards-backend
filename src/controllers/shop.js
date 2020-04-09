import { shop } from '../database/models';
var shopController = {};

shopController.get = async (req, res) => {
    try {
        const result = await shop.findByPk(req.params.shopId);
        res.status(200).json(result);
    } catch (error) {
        res.status(400).send(error);
    }
}

shopController.getAll = async (req, res) => {
    try {
        let pageNo = req.params.page;
        let offset = (pageNo - 1) * 15;
        let limit = 15;
        const result = await shop.findAll({offset, limit});
        res.status(200).json(result);
    } catch (error) {
        res.status(400).send(error);
    }
}

shopController.create = async (req, res) => {
    try {
        let body = req.body;
        const result = await shop.create(body);
        res.status(200).json(result.dataValues.id);
    }
    catch (error) {
        res.status(400).send(error);
    }
}

shopController.update = async (req, res) => {
    try {
        let body = req.body;
        const result = await shop.update(body, {
            where: {
                id: req.params.shopId
            }
        });
        res.status(200).json(result);
    } catch (error) {
        res.status(400).send(error);
    }
}

shopController.delete = async (req, res) => {
    try {
        const result = await shop.destroy({
            where: {
                id: req.params.shopId
            }
        });
        res.status(200).json(result);
    } catch (error) {
        res.status(400).send(error);
    }
}

shopController.addImage = async (req, res) => {
    try {
       } catch (error) {
        res.status(400).send(error);
    }
}

shopController.deleteImage = async (req, res) => {
    try {
    } catch (error) {
        res.status(400).send(error);
    }
}

module.exports = shopController;