
exports.up = function(knex) {
  return knex.schema.createTable('music', table => {
      table.increments()
      table.string('title')
      table.string('content')
      table.string('yt-music')
      table.string('image')
      table.string('band')
      table.string('amazon-link')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('music')
};
