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

const addDefaultExpenseCategories = (user) => {
  const defaultExpenseCategories = ['Food', 'Clothing', 'Transportation', 'Housing', 'Utilities' ,'Medical', 'Debt Payments'];

  const defaultExpenseCategoriesFormatted = defaultExpenseCategories.map(x => {
    return {user_id: user, category: x}
  })

  return knex('expense_category')
    .insert(defaultExpenseCategoriesFormatted)
    .then(() => defaultExpenseCategoriesFormatted)
    .catch(e => console.log('Error:', e.message));
}

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

const getExpenseCategories = (user_id) => {
  return knex('expense_category')
    .where({user_id: user_id})
    .then((res) => res)
    .catch(e => console.log(e.message));
}

const getUserCategoryExpenses = (user_id, expense_category_id) => {
  return knex('expense')
    .where({user_id: user_id})
    .andWhere({expense_category_id: expense_category_id})
    .then((res) => res)
    .catch(e => console.log(e.message));
}

module.exports = {
  addNewUser,
  getUserByEmail,
  addNewExpenseCategory,
  getExpenseCategories,
  addDefaultExpenseCategories,
  getUserCategoryExpenses
}