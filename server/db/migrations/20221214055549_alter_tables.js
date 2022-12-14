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
      t.date('date');
    })

    // creates expense category table
    .createTable('expense_category', (t) => {
      t.increments('id').primary();
      t.integer('user_id').unsigned().references('id').inTable('user').onDelete('cascade');
      t.string('category', 25);
      t.date('date');
    })
};

exports.down = function(knex) {

  //drops tables in order
  return knex.schema
    .dropTable('income_type')
    .dropTable('expense_category')
    .dropTable('user');
};