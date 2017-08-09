import request from '../utils/api'
import {saveUserToken} from '../utils/auth'
import {setError} from './errors'

export function requestLogin () {
  return {
    type: 'LOGIN_REQUEST',
    loggingIn: true,
    isAuthenticated: false
  }
}

export function receiveLogin (user) {
  return {
    type: 'LOGIN_SUCCESS',
    loggingIn: false,
    isAuthenticated: true,
    user
  }
}

export function loginError () {
  return {
    type: 'LOGIN_FAILURE',
    loggingIn: false,
    isAuthenticated: false
  }
}

export function loginUser (creds, callback) {
  return (dispatch) => {
    dispatch(requestLogin())
    return request('post', '/login', creds)
      .then((response) => {
        const userInfo = saveUserToken(response.body.token)
        dispatch(receiveLogin(userInfo))
        callback()
      })
      .catch(err => {
        if (err.status === 403) {
          dispatch(loginError())
          dispatch(setError('Your email or password is incorrect, please try again', true))
        } else {
          dispatch(loginError())
          dispatch(setError("We're sorry, something went wrong while trying to log you in! Please try again", true))
        }
      })
  }
}
