import { Client } from 'pg';
import { env } from 'process';

const {
  DATABASE_NAME,
  DATABASE_USERNAME,
  DATABASE_PASSWORD,
  DATABASE_HOST
} = env;


export default new Client({
  user: DATABASE_USERNAME,
  host: DATABASE_HOST,
  database: DATABASE_NAME,
  password: DATABASE_PASSWORD,
});

