
exports.up = function(knex) {
  return knex.schema.createTable('user', table => {
      table.increments()
      table.string('username', 128)
      table.string('email', 128)
      table.string('password', 128)
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('user')
};
