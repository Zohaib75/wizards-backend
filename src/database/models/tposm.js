import sequelize from 'sequelize';
import connection from '../connection';

const tposm = connection.define('tposm', {
    tposmData: sequelize.JSON,
    imageOne: sequelize.STRING,
    imageTwo: sequelize.STRING,
});

export default tposm;