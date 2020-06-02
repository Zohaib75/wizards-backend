import { user } from '../database/models';
var userController = {};


userController.login = async (req, res) => {
  try {
    console.log(req.body)
    const result = await user.findOne({
      attributes: ['id', 'username', 'imei'],
      where: {
        password: req.body.code
      }
    });
    const { imei, ...userData } = result.dataValues;
    let imeiArray = result.dataValues.imei.split(',');
    // console.log(imeiArray)
    // console.log(req.body.imei)
    if (imeiArray.includes(req.body.imei))
      res.status(200).json(userData);
    else
      res.status(404).json("Sorry, You are not Authorized.");
  } catch (error) {
    console.log(error)
    res.status(400).send(error);
  }
}

userController.adminLogin = async (req, res) => {
  try {
    const result = await user.findByPk(req.params.userId);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).send(error);
  }
}

userController.get = async (req, res) => {
  try {
    const result = await user.findByPk(req.params.userId);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).send(error);
  }
}

userController.getAll = async (req, res) => {
  try {
    let pageNo = req.params.page;
    let offset = (pageNo - 1) * 15;
    let limit = 15;
    const result = await user.findAll({ offset, limit });
    res.status(200).json(result);
  } catch (error) {
    res.status(400).send(error);
  }
}

userController.create = async (req, res) => {
  try {
    let body = req.body;
    console.log(body);
    if (body.role === null || typeof (body.role) === 'undefined')
      res.status(400).send("Please provide a specific role to user.");
    else {
      const result = await user.create(body);
      res.status(200).json(result.dataValues.id);
    }
  }
  catch (error) {
    res.status(400).send(error);
  }
}

userController.update = async (req, res) => {
  try {
    let body = req.body;
    const result = await user.update(body, {
      where: {
        id: req.params.userId
      }
    });
    res.status(200).json(result);
  } catch (error) {
    res.status(400).send(error);
  }
}

userController.delete = async (req, res) => {
  try {
    const result = await user.destroy({
      where: {
        id: req.params.userId
      }
    });
    res.status(200).json(result);
  } catch (error) {
    res.status(400).send(error);
  }
}

userController.getAllImei = async (req, res) => {
  try {
    const result = await user.findOne({
      attributes: ['imei'],
      where: {
        id: req.params.userId
      }
    });
    res.status(200).json(result);
  } catch (error) {
    res.status(400).send(error);
  }
}


module.exports = userController;