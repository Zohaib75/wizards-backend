import sequelize from 'sequelize';
import connection from '../connection';

const stock = connection.define('stock', {
    stockStatus: sequelize.JSON,
});

export default stock;