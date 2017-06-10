
exports.up = function(knex, Promise) {
  return knex.schema.createTable('user_systems', function (table) {
    table.increments('id').primary()
    table.integer('user_id')
    table.integer('igdb_system_id')
    table.date('user_system_date_bought')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('user_systems')
};
