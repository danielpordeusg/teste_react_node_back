import mysql from 'mysql2/promise';

const {
  DB_HOST,
  DB_USER,
  DB_PASS,
  DB_NAME,
  DB_PORT

} = process.env;

export const db = mysql.createPool({
  host: DB_HOST,
  port:Number(DB_PORT),
  user: DB_USER,
  password: DB_PASS,
  database: DB_NAME,
});

