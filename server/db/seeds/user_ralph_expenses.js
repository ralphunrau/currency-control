const bcrypt = require('bcrypt');

const hashPass = bcrypt.hashSync('Ralph123', 10);

exports.seed = async function(knex) {

  await knex('user').del()
  await knex('user').insert([{
    first_name: 'Ralph',
    last_name: 'Unrau',
    email: 'xralphunrau@gmail.com',
    password: hashPass
  }])

  await knex('expense_category').del()
  await knex('expense_category').insert([{
      user_id: 1,
      category: 'Food'
    }, {
      user_id: 1,
      category: 'Clothing'
    }, {
      user_id: 1,
      category: 'Transportation'
    }, {
      user_id: 1,
      category: 'Housing'
    }, {
      user_id: 1,
      category: 'Utilities'
    }, {
      user_id: 1,
      category: 'Medical'
    }, {
      user_id: 1,
      category: 'Debt Payments'
    }
  ])

  await knex('expense').del()
  await knex('expense').insert([{
    user_id: 1,
    expense_category_id: 1,
    expense_category_name: 'Food',
    amount: 20.56,
    name: 'McDonalds'
  }, {
    user_id: 1,
    expense_category_id: 1,
    expense_category_name: 'Food',
    amount: 50.67,
    name: 'Moxies'
  }, {
    user_id: 1,
    expense_category_id: 1,
    expense_category_name: 'Food',
    amount: 11.02,
    name: 'Burger King'
  }, {
    user_id: 1,
    expense_category_id: 2,
    expense_category_name: 'Clothing',
    amount: 57.32,
    name: 'H&M'
  }, {
    user_id: 1,
    expense_category_id: 2,
    expense_category_name: 'Clothing',
    amount: 32.67,
    name: 'Gap'
  }, {
    user_id: 1,
    expense_category_id: 2,
    expense_category_name: 'Clothing',
    amount: 62.24,
    name: 'American Eagle'
  }, {
    user_id: 1,
    expense_category_id: 3,
    expense_category_name: 'Transportation',
    amount: 6.37,
    name: 'Uber'
  }, {
    user_id: 1,
    expense_category_id: 3,
    expense_category_name: 'Transportation',
    amount: 96.23,
    name: 'Gas'
  }, {
    user_id: 1,
    expense_category_id: 3,
    expense_category_name: 'Transportation',
    amount: 59.92,
    name: 'Gas'
  }, {
    user_id: 1,
    expense_category_id: 4,
    expense_category_name: 'Housing',
    amount: 725,
    name: 'Rent'
  }, {
    user_id: 1,
    expense_category_id: 5,
    expense_category_name: 'Utilities',
    amount: 114.14,
    name: 'BCHydro'
  }, {
    user_id: 1,
    expense_category_id: 5,
    expense_category_name: 'Utilities',
    amount: 48.29,
    name: 'FortisBC'
  }, {
    user_id: 1,
    expense_category_id: 6,
    expense_category_name: 'Medical',
    amount: 200.84,
    name: 'Broken Arm'
  }, {
    user_id: 1,
    expense_category_id: 6,
    expense_category_name: 'Medical',
    amount: 7.23,
    name: 'Cough Syrup'
  }, {
    user_id: 1,
    expense_category_id: 6,
    expense_category_name: 'Medical',
    amount: 51.62,
    name: 'Anti-depressants'
  }, {
    user_id: 1,
    expense_category_id: 7,
    expense_category_name: 'Debt Payments',
    amount: 145.14,
    name: 'Debt Luke'
  }, {
    user_id: 1,
    expense_category_id: 7,
    expense_category_name: 'Debt Payments',
    amount: 20.82,
    name: 'Debt Karn'
  }, {
    user_id: 1,
    expense_category_id: 7,
    expense_category_name: 'Debt Payments',
    amount: 171.02,
    name: 'Debt Ethan'
  }, ])
};
