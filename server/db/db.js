const knex = require('./knex');

const addNewUser = (user) => {
  const newUser = {
    first_name: user.firstName,
    last_name: user.lastName,
    email: user.email,
    password: user.password
  }
  return knex('users')
    .insert({...newUser})
    .then(() => newUser)
    .catch(e => console.log('Error:', e.message));
};

const getUserByEmail = (email) => {
  return knex('users')
    .where({ email: email })
    .then((res) => res[0])
    .catch(e => console.log(e.message));
};

module.exports = {
  addNewUser,
  getUserByEmail
}