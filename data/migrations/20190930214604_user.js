
exports.up = function(knex) {
  return knex.schema.createTable('user', table => {
      table.increments()
      table.string('username')
      table.string('email')
      table.string('password')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('user')
};
