
exports.up = function(knex) {
  return knex.schema.createTable('chat', table => {
      table.increments() 
      table.string('post')
      table.string('username')
      table.integer('date')
  })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('chat')
};
