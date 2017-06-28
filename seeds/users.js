exports.seed = function (knex, Promise) {
  return knex('users').del()
    .then(function () {
      return knex('users').insert([
        {
          user_email: 'alanpjordan@gmail.com',
          user_username: 'eljordy',
          'user_first_name': 'Alan',
          'user_surname': 'Jordan',
          'user_dob': '1982-05-26',
          'user_password': '$2a$10$lnPF9CbdjY5hLCq39avC6OVUNN8okk6WS/kOcmoNiRoS4MDysM64G'
        },
        {
          user_email: 'mario@nintendo.com',
          user_username: 'itsame',
          'user_first_name': 'Super',
          'user_surname': 'Mario',
          'user_dob': '1985-09-13',
          'user_password': '$2a$10$lnPF9CbdjY5hLCq39avC6OVUNN8okk6WS/kOcmoNiRoS4MDysM64G'
        },
        {
          user_email: 'sonic@sega.com',
          user_username: 'mr_redsh0ez',
          'user_first_name': 'Sonic',
          'user_surname': 'Hedgehog',
          'user_dob': '1991-06-23',
          'user_password': '$2a$10$lnPF9CbdjY5hLCq39avC6OVUNN8okk6WS/kOcmoNiRoS4MDysM64G'
        },
        {
          user_email: 'batman@arkham.com',
          user_username: 'imB@tm@N',
          'user_first_name': 'Bruce',
          'user_surname': 'Waye',
          'user_dob': '1939-05-01',
          'user_password': '$2a$10$lnPF9CbdjY5hLCq39avC6OVUNN8okk6WS/kOcmoNiRoS4MDysM64G'
        }
      ])
    })
}
