const mysql = require('mysql');
const createTables = require('./config');
const Promise = require('bluebird');
const database = 'TREK';

const connection = mysql.createConnection({
  user: 'root',
  password: '',
});

const db = Promise.promisifyAll(connection, { multiArgs: true });

db.connectAsync()
  .then(() => console.log(`Connected to ${database} database as ID ${db.threadId}`))
  .then(() => db.queryAsync(`DROP DATABASE IF EXISTS ${database}`))
  .then(() => db.queryAsync(`CREATE DATABASE IF NOT EXISTS ${database}`))
  .then(() => db.queryAsync(`USE ${database}`))
  .then(() => createTables(db));

module.exports = db;