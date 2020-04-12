import sequelize from 'sequelize';
import connection from '../connection';
import shop from './shop';
import user from './user';

const shopAssign = connection.define('shopAssign', {
  id: {
    type: sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  userId: {
    type: sequelize.INTEGER,
    references: {
      model: user,
      key: 'id'
    }
  },  
  shopId: {
    type: sequelize.INTEGER,
    references: {
      model: shop,
      key: 'id'
    }
  },
  status: {
    type: sequelize.ENUM,
    values: ['assigned', 'unassigned']
  }
});

export default shopAssign;