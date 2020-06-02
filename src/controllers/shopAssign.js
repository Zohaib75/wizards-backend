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
        // const values = await shopAssign.findAll({
        //     attributes: [['id', 'shopAssignId'], 'shopId'],
        //     where: {
        //         userId: req.params.userId,
        //         visitDay: req.params.day,
        //         status: 'assigned'
        //     },
        //     raw: true
        // });

        // console.log(values);
        // let shopIds = values.map(value => value.shopId);
        // console.log(shopIds);
        let result = await shop.findAll({
            where: {
                visitDay: req.params.day
            },
            attributes: { include: [['id', 'shopId']], exclude: ['image', 'owner', 'mobile', 'id', 'visitDay', 'createdAt', 'updatedAt'] },
            include: [{
                association: 'shopAssignUsers', where: { id: req.params.userId },
                attributes: {
                    include: [['id', 'userId']],
                    exclude: ['id', 'username', 'password', 'mobile', 'imei',
                        'role', 'zone', 'region', 'createdAt', 'updatedAt']
                }
            }]
        });
        res.status(200).json(result);
    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
}

module.exports = shopAssignController;