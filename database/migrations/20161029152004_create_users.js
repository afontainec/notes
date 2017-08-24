exports.up = function createUsers(knex, Promise) {
  return Promise.join(knex.schema.createTable('users', (table) => {
    table.increments();
    table.text('username').notNullable().unique();
    table.text('password').notNullable();
    table.timestamps();
  }));
};

exports.down = function dropUsers(knex) {
  return knex.schema.dropTable('users');
};
