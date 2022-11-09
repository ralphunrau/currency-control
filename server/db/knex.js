require('dotenv').config({ path: '../.env' });

const pg = require('knex')({
  client: 'pg',
  connection: process.env.PG_CONNECTION_STRING,
  search: ['knex', 'public']
});

// const allUsers = async () => {
//   const results = await pg('users').select('id', 'first_name', 'last_name', 'email', 'password');
//   console.log(results);
// };

// const selectUsers = async (email) => {
//   const results = await pg('users')
//     .where({email: email})

//   console.log(results);
// };

const addNewUser = async (user) => {

  const newUser = {
    first_name: user.firstName,
    last_name: user.lastName,
    email: user.email,
    password: user.password
  }
  
  return pg('users')
    .insert({...newUser})
    .then(() => newUser)
    .catch(e => console.log('Error:', e.message));
};

module.exports = {
  addNewUser
};