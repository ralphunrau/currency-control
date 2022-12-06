exports.up = function(knex) {
  return knex.schema.createTable('users', (t) => {
    t.increments('id').primary();
    t.string('first_name', 100);
    t.string('last_name', 100);
    t.string('email', 100);
    t.string('password', 250);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('users');
};
