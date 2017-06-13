import test from 'ava'
import nock from 'nock'

import * as action from '../../client/actions'

test.cb('fetchLatestUsers', t => {
  nock('http://localhost:80')
    .get('/api/v1/latestusers')
    .reply(200, [{user_username: 'eljordy'}, {user_username: 'itsame'}])

  action.fetchLatestUsers()((actual) => {
    t.is(actual.users.length, 2)
    t.is(actual.users[1].user_username, 'itsame')
    t.is(actual.type, 'RECEIVE_NEW_USERS')
    nock.cleanAll()
    t.end()
  })
})
