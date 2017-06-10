exports.seed = function (knex, Promise) {
  return knex('users').del()
    .then(function () {
      return knex('users').insert([
        {
          id: 1,
          user_email: 'alanpjordan@gmail.com',
          user_username: 'eljordy',
          'user_first_name': 'Alan',
          'user_surname': 'Jordan',
          'user_dob': '1982-05-26',
          'user_password': '$2a$10$lnPF9CbdjY5hLCq39avC6OVUNN8okk6WS/kOcmoNiRoS4MDysM64G'
        },
        {
          id: 2,
          user_email: 'mario@nintendo.com',
          user_username: 'itsame',
          'user_first_name': 'Super',
          'user_surname': 'Mario',
          'user_dob': '1985-09-13',
          'user_password': '$2a$10$lnPF9CbdjY5hLCq39avC6OVUNN8okk6WS/kOcmoNiRoS4MDysM64G'
        }
      ])
    })
}
