import { shopAssign } from '../database/models';
var shopAssignController = {};

shopAssignController.create = async (req, res) => {
    try {
        let body = req.body;
        const result = await shopAssign.create(body);
        res.status(200).json(result.dataValues.id);
    }
    catch (error) {
        res.status(400).send(error);
    }
}

shopAssignController.update = async (req, res) => {
    try {
        let body = req.body;
        const result = await shopAssign.update(body, {
            where: {
                id: req.params.id
            }
        });
        res.status(200).json(result);
    } catch (error) {
        res.status(400).send(error);
    }
}

shopAssignController.getAll = async (req, res) => {

    try {
        let pageNo = req.params.page;
        let offset = (pageNo - 1) * 15;
        let limit = 15;
        const result = await shopAssign.findAll({ offset, limit });
        res.status(200).json(result);
    } catch (error) {
        res.status(400).send(error);
    }

}

module.exports = shopAssignController;