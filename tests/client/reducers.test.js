import test from 'ava'

import usersReducer from '../../client/reducers/users'
import userReducer from '../../client/reducers/user'
import * as actions from '../../client/actions'
import gameReducer from '../../client/reducers/game'
import * as userGames from './helpers/userGamesExample'
import addGameReducer from '../../client/reducers/addGame'

test('default users is empty array', t => {
  const initialState = usersReducer()
  t.is(initialState.length, 0)
})

test('receiveNewUsers works', t => {
  const initialState = usersReducer()
  const newUsers = [{user_username: 'eljordy'}, {user_username: 'itsame'}]
  const nextState = usersReducer(initialState, actions.receiveNewUsers(newUsers))
  t.is(nextState.length, 2)
  t.is(nextState[1].user_username, 'itsame')
})

test('default game is an empty object', t => {
  const initialState = gameReducer()
  t.is(typeof(initialState), 'object')
})

test('user games are set', t => {
  const initialState = userReducer()
  const nextState = userReducer(initialState, actions.setUserGames(userGames.userGames))
  t.is(nextState.games.length, 5)
  t.is(nextState.games[2].igdb_game_id, 18)
})

test('addGameVisibleToggle works correctly', t => {
  const initialState = addGameReducer()
  t.is(initialState, false)
  const nextState = addGameReducer(initialState, actions.addGameVisibleToggle(false))
  t.is(nextState, true)
})
