
exports.up = function(knex) {
  return knex.schema.createTable('post', table => {
      table.increments()
      table.string('username').notNullable().unique()
      table.string('content').notNullable().unique()
      table.string('youtube-link')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('post')
};
