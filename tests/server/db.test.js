var test = require('ava')

var configureDatabase = require('./helpers/database-config')
configureDatabase(test)

var usersDb = require('../../server/db/users')


test('getUsers gets all users', t => {
  return usersDb.getUsers(t.context.connection)
    .then((result) => {
      return new Promise((resolve, reject) => {
        var actual = result.length
        t.is(actual, 3)
        resolve()
      })
    })
})
