exports.up = function(knex) {

  return knex.schema

    //creates user table
    .createTable('user', (t) => {
      t.increments('id').primary();
      t.string('first_name', 100);
      t.string('last_name', 100);
      t.string('email', 100);
      t.string('password', 250);
    })

    //creates income type table
    .createTable('income_type', (t) => {
      t.increments('id').primary();
      t.integer('user_id').unsigned().references('id').inTable('user').onDelete('cascade');
      t.string('type', 25);
      t.timestamps(true, true, true);
    })

    // creates expense category table
    .createTable('expense_category', (t) => {
      t.increments('id').primary();
      t.integer('user_id').unsigned().references('id').inTable('user').onDelete('cascade');
      t.string('category', 25);
      t.timestamps(true, true, true);
    })

    // creates expense table
    .createTable('expense', (t) => {
      t.increments('id').primary();
      t.integer('user_id').unsigned().references('id').inTable('user').onDelete('cascade');
      t.integer('expense_category_id').unsigned().references('id').inTable('expense_category').onDelete('cascade');
      t.string('expense_category_name', 25);
      t.float('amount');
      t.string('name', 25);
      t.timestamps(true, true, true);
    })

    // creates income table
    .createTable('income', (t) => {
      t.increments('id').primary();
      t.integer('user_id').unsigned().references('id').inTable('user').onDelete('cascade');
      t.integer('income_type_id').unsigned().references('id').inTable('income_type').onDelete('cascade');
      t.float('amount');
      t.string('name', 25);
      t.timestamps(true, true, true);
    })
};

exports.down = function(knex) {

  //drops tables in order
  return knex.schema
    .dropTable('income')
    .dropTable('expense')
    .dropTable('income_type')
    .dropTable('expense_category')
    .dropTable('user');
};