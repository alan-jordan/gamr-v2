import test from 'ava'

import * as actions from '../../client/actions'
import usersReducer from '../../client/reducers/users'
import userReducer from '../../client/reducers/user'
import gameReducer from '../../client/reducers/game'
import addGameReducer from '../../client/reducers/addGame'
import searchGamesReducer from '../../client/reducers/searchGames'
import * as userGames from './helpers/userGamesExample'
import * as gameExample from './helpers/gameExample'

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

test('SET_GAME_DETAILS', t => {
  const testAction = {
    type: 'SET_GAME_DETAILS',
    game: {id: 1, name: 'This is a game'}
  }
  const initialState = gameReducer()
  const nextState = gameReducer(initialState, testAction)
  t.not(nextState, {})
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
  const nextNextState = addGameReducer(initialState, actions.addGameVisibleToggle(true))
  t.is(nextNextState, false)
})

test('search reducer returns an array of search results', t => {
  const initialState = searchGamesReducer()
  const nextState = searchGamesReducer(initialState, actions.setSearchResults(gameExample.searchResult))
  t.is(nextState.searchResults.length, 4)
  t.is(nextState.searchResults[0].id, 11542)
})
