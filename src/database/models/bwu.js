import sequelize from 'sequelize';
import connection from '../connection';

const bwu = connection.define('bwu', {
    bwuStatus: sequelize.JSON,
    image: sequelize.STRING,
});

export default bwu;