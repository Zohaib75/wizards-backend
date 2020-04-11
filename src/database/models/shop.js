import sequelize from 'sequelize';
import connection from '../connection';

const shop = connection.define('shop', {
  shopCode: sequelize.STRING,
  name: sequelize.STRING,
  area: sequelize.STRING,
  owner: sequelize.STRING,
  mobile: sequelize.STRING,
  address: sequelize.STRING,
  city: sequelize.STRING,
  province: sequelize.STRING,
  lat: sequelize.STRING,
  long: sequelize.STRING,
  classification: sequelize.STRING,
  category: sequelize.STRING,
  image: sequelize.STRING,
  visitDay: {
    type: sequelize.ENUM,
    values: ['mon', 'tue', 'wed', 'thu', 'fri', 'sat']
  }
});

export default shop;