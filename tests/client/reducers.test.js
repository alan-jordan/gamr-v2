import test from 'ava'

import userReducer from '../../client/reducers/users'
import {receiveNewUsers, setUserGames} from '../../client/actions'
import gameReducer from '../../client/reducers/game'
import * as userGames from './helpers/userGamesExample'

test('default users is empty array', t => {
  const initialState = userReducer()
  t.is(initialState.length, 0)
})

test('receiveNewUsers works', t => {
  const initialState = userReducer()
  const newUsers = [{user_username: 'eljordy'}, {user_username: 'itsame'}]
  const nextState = userReducer(initialState, receiveNewUsers(newUsers))
  t.is(nextState.length, 2)
  t.is(nextState[1].user_username, 'itsame')
})

test('default game is an empty object', t => {
  const initialState = gameReducer()
  t.is(typeof(initialState), 'object')
})

test('user games are set', t => {
  const initialState = userReducer()
  const nextState = userReducer(initialState, setUserGames(userGames.userGames))
  console.log(nextState);
})
