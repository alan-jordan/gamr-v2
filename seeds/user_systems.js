exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('user_systems').del()
    .then(function () {
      // Inserts seed entries
      return knex('user_systems').insert([
        {
          id: 1,
          user_id: 1,
          igdb_system_id: 1,
          user_system_date_bought: '2017-03-17'
        },
        {
          id: 2,
          user_id: 2,
          igdb_system_id: 2,
          user_system_date_bought: '2017-03-17'
        },
        {
          id: 3,
          user_id: 1,
          igdb_system_id: 3,
          user_system_date_bought: '2017-03-17'
        }
      ])
    })
}
