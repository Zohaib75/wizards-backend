const { Sequelize } = require('sequelize');
require("dotenv").config();
import { env } from 'process';

const {
    DATABASE_NAME,
    DATABASE_USERNAME,
    DATABASE_PASSWORD,
    DATABASE_HOST
} = env;

const connection = new Sequelize(DATABASE_NAME, DATABASE_USERNAME, DATABASE_PASSWORD, {
    host: DATABASE_HOST,
    dialect: 'postgres'
});

export default connection;