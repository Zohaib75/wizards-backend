import sequelize from 'sequelize';
import connection from '../connection';

const tposmItem = connection.define('tposmItem', {
    item: sequelize.STRING,
});

export default tposmItem;