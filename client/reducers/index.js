import {combineReducers} from 'redux'

import users from './users'
import user from './user'
import game from './game'
import addGame from './addGame'
import searchGames from './searchGames'
import auth from './auth'


export default combineReducers({
  game,
  users,
  user,
  addGame,
  searchGames,
  auth
})
