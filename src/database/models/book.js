import sequelize from 'sequelize';
import connection from '../connection';

const book = connection.define('book', {
    bookStatus: sequelize.STRING,
    image: sequelize.STRING,
});

export default book;