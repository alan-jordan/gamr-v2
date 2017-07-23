exports.seed = function (knex, Promise) {
  return knex('users').del()
    .then(function () {
      return knex('users').insert([
        {
          user_username: 'eljordy',
          'user_first_name': 'Alan',
          'user_surname': 'Jordan'
        },
        {
          user_username: 'itsame',
          'user_first_name': 'Super',
          'user_surname': 'Mario'
        },
        {
          user_username: 'mr_redsh0ez',
          'user_first_name': 'Sonic',
          'user_surname': 'Hedgehog'
        },
        {
          user_username: 'imB@tm@N',
          'user_first_name': 'Bruce',
          'user_surname': 'Waye'
        }
      ])
    })
}
