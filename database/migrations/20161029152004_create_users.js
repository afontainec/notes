exports.up = function (knex, Promise) {
  return Promise.join(knex.schema.createTable('users', (table) => {
    table.increments();
    table.text('username').notNullable().unique();
    table.text('password').notNullable();
    table.timestamps();
  }));
};

exports.down = function (knex) {
  return knex.schema.dropTable('users');
};
