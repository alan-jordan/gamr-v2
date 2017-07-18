import sinon from 'sinon'
import test from 'ava'

var configureDatabase = require('./helpers/database-config')
configureDatabase(test)

var usersDb = require('../../server/db/users')

test('getUsers gets all users', t => {
  return usersDb.getUsers(t.context.connection)
    .then((result) => {
      return new Promise((resolve, reject) => {
        t.is(result.length, 4)
        resolve()
      })
    })
})

test('getUsers handles errors', t => {

  const expectedError = new Error('Error message')
  let getUsers = sinon.stub(usersDb, 'getUsers')
  getUsers.throws(expectedError)
  let callback = sinon.spy()

  const error = t.throws(() => {
    usersDb.getUsers(t.context.connection, callback)
  }, Error)

  t.is(error.message, 'Error message')
  getUsers.restore()
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

test('getNumUsers gets 2 gamrs', t => {
  return usersDb.getNumUsers(2, t.context.connection)
    .then((result) => {
      return new Promise((resolve, reject) => {
        t.is(result.length, 2)
        resolve()
      })
    })
})

test('getUserGames gets all users games', t => {
  return usersDb.getUserGames(1, t.context.connection)
    .then((result) => {
      return new Promise((resolve, reject) => {
        t.is(result.length, 5)
        t.is(result[1].user_game_system_id, 2)
        resolve()
      })
    })
})
