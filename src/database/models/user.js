import sequelize from 'sequelize';
import connection from '../connection';

const user = connection.define('user', {
  username: sequelize.STRING,
  password: sequelize.STRING,
  mobile: sequelize.STRING,
  imei: sequelize.JSON,
  role: sequelize.ENUM('admin', 'agent', 'supervisor', 'merchandiser'),
  zone: sequelize.STRING,
  region: sequelize.STRING
});

export default user;