exports.up = function (knex, Promise) {
  return knex.schema.createTable('user_auth', function (table) {
    table.increments('id').primary()
    table.integer('user_id')
    table.string('user_email').unique()
    table.binary('hash')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('user_auth')
}
