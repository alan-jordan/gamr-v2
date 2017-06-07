
exports.up = function (knex, Promise) {
  return knex.schema.createTable('users', function (table) {
    table.increments('id').primary()
    table.string('user_email')
    table.unique('user_email')
    table.string('user_username')
    table.string('user_first_name')
    table.string('user_surname')
    table.date('user_dob')
    table.binary('user_password')
    table.date('user_date_registered').defaultTo(knex.fn.now())
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('users')
}
