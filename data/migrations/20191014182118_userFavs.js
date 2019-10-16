
exports.up = function(knex) {
  return knex.schema.createTable('userFavs', table => {
      table.increments()
      table.integer('user_id')
           .unsigned()
           .references('id')
           .inTable('user')
           .onUpdate('CASCADE')
           .onDelete('CASCADE');
      
      table.specificType('favNewsPub', 'string ARRAY')
      table.specificType('favGenre', 'string ARRAY')
      table.specificType('userPub', 'string ARRAY')

  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('userFavs')
};
