import sequelize from 'sequelize';
import connection from '../connection';

const bwuItem = connection.define('bwuItem', {
    type: sequelize.STRING,
});

export default bwuItem;