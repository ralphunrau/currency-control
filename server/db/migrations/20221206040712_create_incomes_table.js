exports.up = function(knex) {
  return knex.schema.createTable('incomes', (t) => {
    t.increments('id').primary();
    t.integer('user_id').unsigned().references('id').inTable('users').onDelete('cascade').notNullable();
    t.string('category', 25).onDelete('cascade');
    t.date('date');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('incomes');
};
