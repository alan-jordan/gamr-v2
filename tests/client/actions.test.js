import test from 'ava'

import {fetchLatestUsers} from '../../client/actions'
import users from '../../client/reducers/users'

test.skip('fetchLatestUsers gets 2 users', t => {
  const nextState = users([], fetchLatestUsers())
  t.is(nextState.length, 2)
  t.is(nextState[1].user_username, 'itsame')
})
