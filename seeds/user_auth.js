const getHash = require('../server/lib/crypto').getHash

exports.seed = function (knex, Promise) {
  return knex('users').del()
    .then(function () {
      return knex('users').insert([
        {
          'user_id': 1,
          'user_email': 'alanpjordan@gmail.com',
          'hash': getHash('password')
        },
        {
          'user_id': 2,
          'user_email': 'mario@gmail.com',
          'hash': getHash('password')
        },
        {
          'user_id': 3,
          'user_email': 'sonic@gmail.com',
          'hash': getHash('password')
        },
        {
          'user_id': 4,
          'user_email': 'imbatman@gmail.com',
          'hash': getHash('password')
        }
      ])
    })
}
