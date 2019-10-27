
exports.up = function(knex) {
  return knex.schema.createTable('userFavs', table => {
      table.increments()
      table.integer('user_id')
           .unsigned()
           .references('id')
           .inTable('user')
           .onUpdate('CASCADE')
           .onDelete('CASCADE');
      
      table.string('follow')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('userFavs')
};
