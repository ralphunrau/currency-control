require('dotenv').config({ path: '../.env' });

const pg = require('knex')({
  client: 'pg',
  connection: process.env.PG_CONNECTION_STRING,
  search: ['knex', 'public']
});

const allUsers = async () => {
  const results = await pg('users').select('id', 'first_name', 'last_name', 'email', 'password');
  console.log(results);
};

const selectUsers = async (email) => {
  const results = await pg('users')
    .where({email: email})

  console.log(results);
}


allUsers();
selectUsers('xralphunrau@gmail.com');