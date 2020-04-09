import sequelize from 'sequelize';
import connection from '../connection';

const stockItem = connection.define('stockItem', {
    item: sequelize.STRING,
});

export default stockItem;