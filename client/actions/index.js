import request from 'superagent'

require('dotenv').config()

export const receiveNewUsers = (users) => {
  return {
    type: 'RECEIVE_NEW_USERS',
    users: users
  }
}

export const throwError = (message) => {
  return {
    type: 'THROW_ERROR',
    err: message
  }
}

export const fetchLatestUsers = () => {
  return (dispatch) => {
    request
      .get('/api/v1/latestusers')
      .end((err, res) => {
        err ? dispatch(throwError(err.message)) : dispatch(receiveNewUsers(res.body))
      })
  }
}

export const setUser = (user) => {
  return {
    type: 'SET_USER',
    user
  }
}

export const fetchUser = (userId) => {
  return (dispatch) => {
    request
      .get(`/api/v1/users/${userId}`)
      .end((err, res) => {
        err ? dispatch(throwError(err.message)) : dispatch(setUser(res.body))
      })
  }
}

export const getUserGames = (userId) => {
  return (dispatch) => {
    request
      .get(`/api/v1/users/${userId}/games`)
      .end((err, res) => {
        err ? dispatch(throwError(err.message))
        : dispatch(setUserGames(res.body))
      })
  }
}

export const setUserGames = (games) => {
  return {
    type: 'SET_USER_GAMES',
    games: games
  }
}

export const getGameDetails = (game) => {
  return (dispatch) => {
    request
      .get(`/api/v1/games/${game}`)
      .end((err, res) => {
        err ? dispatch(throwError(err.message)) : dispatch(setGameDetails(res.body))
      })
  }
}

export const setGameDetails = (game) => {
  return {
    type: 'SET_GAME_DETAILS',
    game
  }
}

export const addGameVisibleToggle = (newVisibleState) => {
  return newVisibleState ? {type: 'TOGGLE_ADD_GAME_NOT_VISIBLE'} : {type: 'TOGGLE_ADD_GAME_VISIBLE'}
}
