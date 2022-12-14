const knex = require('./knex');

const addNewUser = (user) => {
  const newUser = {
    first_name: user.firstName,
    last_name: user.lastName,
    email: user.email,
    password: user.password
  }
  return knex('user')
    .insert({...newUser})
    .then(() => newUser)
    .catch(e => console.log('Error:', e.message));
};

const getUserByEmail = (email) => {
  return knex('user')
    .where({ email: email })
    .then((res) => res[0])
    .catch(e => console.log(e.message));
};

const addNewExpenseCategory = (expenseCategory) => {
  const newExpenseCategory = {
    user_id: expenseCategory.user,
    category: expenseCategory.category
  }
  return knex('expense_category')
    .insert({...newExpenseCategory})
    .then(() => newExpenseCategory)
    .catch(e => console.log('Error:', e.message));
};

module.exports = {
  addNewUser,
  getUserByEmail,
  addNewExpenseCategory
}