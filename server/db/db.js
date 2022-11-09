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

module.exports = {
  addNewUser
}