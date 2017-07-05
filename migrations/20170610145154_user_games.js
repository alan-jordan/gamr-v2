
exports.up = function (knex, Promise) {
  return knex.schema.createTable('user_games', function (table) {
    table.increments('id').primary()
    table.integer('user_id')
    table.integer('igdb_game_id')
    table.date('user_game_date_bought')
    table.integer('user_game_system_id')
    table.integer('user_game_format') // Physical or digital
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('user_games')
}
