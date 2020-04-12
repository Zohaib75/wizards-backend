const { Sequelize } = require('sequelize');
require("dotenv").config();
import { env } from 'process';

const {
    DATABASE_NAME,
    DATABASE_USERNAME,
    DATABASE_PASSWORD,
    DATABASE_HOST,
    DATABASE_URL
} = env;

let connection; 
if (DATABASE_URL) {
    connection = new Sequelize(DATABASE_URL, {
        dialect: 'postgres'
    });
}
else {
     connection = new Sequelize(DATABASE_NAME, DATABASE_USERNAME, DATABASE_PASSWORD, {
        host: DATABASE_HOST,
        dialect: 'postgres'
    });
}

export default connection;