import request from 'superagent'

export const receiveNewGamrs = (gamrs) => {
  return {
    type: 'RECEIVE_NEW_USERS',
    gamrs: gamrs.map(gamr => gamr)
  }
}

export const throwError = (message) => {
  return {
    type: 'THROW_ERROR',
    message
  }
}

export const fetchLatestGamrs = () => {
  return (dispatch) => {
    request
      .get('/api/v1/latestusers')
      .end((err, res) => {
        err ? dispatch(throwError(err.message)) : dispatch(receiveNewGamrs(res.body))
      })
  }
}
