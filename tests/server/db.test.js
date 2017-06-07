var test = require('ava')

var configureDatabase = require('./helpers/database-config')
configureDatabase(test)

var usersDb = require('../../server/db/users')

test('getUsers gets all users', t => {
  return usersDb.getUsers(t.context.connection)
    .then((result) => {
      return new Promise((resolve, reject) => {
        t.is(result.length, 2)
        resolve()
      })
    })
})

test('getUserById gets a user by its ID', t => {
  return usersDb.getUserById(1, t.context.connection)
    .then((result) => {
      return new Promise((resolve, reject) => {
        t.is(result.user_username, 'eljordy')
        t.is(result.user_email, 'alanpjordan@gmail.com')
        resolve()
      })
    })
})
