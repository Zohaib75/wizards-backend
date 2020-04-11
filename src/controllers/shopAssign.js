import { shopAssign, shop } from '../database/models';
var shopAssignController = {};

shopAssignController.create = async (req, res) => {
    try {
        let body = req.body;
        const result = await shopAssign.create(body);
        res.status(200).json(result.dataValues);
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

shopAssignController.getShops = async (req, res) => {
    try {
        const values = await shopAssign.findAll({
            attributes: ['shopId'],
            where: {
                userId: req.params.userId,
                status: 'assigned'
            },
            raw : true
        });

        let shopIds = values.map(value => value.shopId);
        console.log(shopIds);
        const result = await shop.findAll({
            where:{
                id:shopIds,
                visitDay: req.params.day
            }
        });
        res.status(200).json(result);
    } catch (error) {
        res.status(400).send(error);
    }
}

module.exports = shopAssignController;