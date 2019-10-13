
exports.up = function(knex) {
  return knex.schema.createTable('postNews', table => {
      table.increments()
      table.string('title')
      table.string('teaser')
      table.string('content')
      table.string('you-tube-video')
      table.string('link')
      table.string('image')
      table.string('source')
      table.string('date')
      table.string('postedBy')
      table.string('genre')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('postNews')
};
