require('dotenv').config({ path: '../.env' });

module.exports = {
  client: 'pg',
  connection: process.env.PG_CONNECTION_STRING,
  search: ['knex', 'public']
};
