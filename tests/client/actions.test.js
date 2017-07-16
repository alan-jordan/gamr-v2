import test from 'ava'
import nock from 'nock'

import * as action from '../../client/actions'

test.cb('fetchLatestUsers', t => {
  nock('http://localhost:80')
    .get('/api/v1/latestusers')
    .reply(200, [
      {user_username: 'eljordy'},
      {user_username: 'itsame'}
    ])

  action.fetchLatestUsers()((actual) => {
    t.is(actual.users.length, 2)
    t.is(actual.users[1].user_username, 'itsame')
    t.is(actual.type, 'RECEIVE_NEW_USERS')
    nock.cleanAll()
    t.end()
  })
})

test.cb('fetchUser', t => {
  nock('http://localhost:80')
    .get('/api/v1/users/1')
    .reply(200, {
      id: 1,
      user_username: 'eljordy'
    })

  action.fetchUser(1)((actual) => {
    t.is(actual.user.id, 1)
    t.is(actual.type, 'SET_USER')
    t.is(actual.user.user_username, 'eljordy')
    nock.cleanAll()
    t.end()
  })
})

test('throwError throws an error', t => {
  const expectedAction = {
    type: 'THROW_ERROR',
    err: 'this is an error'
  }
  t.deepEqual(action.throwError('this is an error'), expectedAction)
})

test('receiveNewUsers returns array of users', t => {
  const expectedAction = {
    type: 'RECEIVE_NEW_USERS',
    users: [{id: 1}, {id: 2}]
  }
  t.deepEqual(action.receiveNewUsers([{id: 1}, {id: 2}]), expectedAction)
})

test('setUser returns a user Object', t => {
  const expectedAction = {
    type: 'SET_USER',
    user: {id: 1}
  }
  t.deepEqual(action.setUser({id: 1}), expectedAction)
})

test.cb('getUserGames', t => {
  let scope = nock('http://localhost:80')
    .get('/api/v1/users/1/games')
    .reply(200, {message: 'getUserGames working'})

  action.getUserGames(1)((actual) => {
    scope.done()
    t.is(actual.games.message, 'getUserGames working')
    t.end()
  })
})

test('addGameVisibleToggle', t => {
  t.is(action.addGameVisibleToggle(true).type, 'TOGGLE_ADD_GAME_NOT_VISIBLE')
  t.is(action.addGameVisibleToggle(false).type, 'TOGGLE_ADD_GAME_VISIBLE')
})
