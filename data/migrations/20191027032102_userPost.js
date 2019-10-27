
exports.up = function(knex) {
    return knex.schema.createTable('userPost', table => {
        table.increments()
        table.integer('user_id')
             .unsigned()
             .references('id')
             .inTable('user')
             .onUpdate('CASCADE')
             .onDelete('CASCADE');
        
        table.string('title')
        table.string('teaser')
        table.string('link')
        table.string('youTubeVideo')
        table.string('content')
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('userPost')
  };