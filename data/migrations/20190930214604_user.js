
exports.up = function(knex) {
  return knex.schema.createTable('user', table => {
      table.increments()
      table.string('username').notNullable().unique()
      table.string('email').notNullable().unique()
      table.string('password').notNullable()
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('user')
};
