require('dotenv').config({ path: '../.env' });

console.log(process.env.PG_CONNECTION_STRING);

const pg = require('knex')({
  client: 'pg',
  connection: process.env.PG_CONNECTION_STRING,
  search: ['knex', 'public']
});

const main = async () => {
  const testConnection = await pg.raw('SELECT 1+1');

  console.log(testConnection);
};

main();