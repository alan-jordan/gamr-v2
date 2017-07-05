import request from 'superagent'

const url = 'https://igdbcom-internet-game-database-v1.p.mashape.com'

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
    user: user
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

export const getGameDetails = (gameId) => {
  return (dispatch) => {
    request
      .get(`${url}/games/${gameId}?fields=*`)
      .set('X-Mashape-Key', process.env.MASHAPEKEY)
      .set('Accept', 'application/json')
      .end((err, res) => {
        err ? dispatch(throwError(err.message)) : dispatch(setGameDetails(res.body))
      })
  }
}
