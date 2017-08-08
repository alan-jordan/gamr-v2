import { isAuthenticated, getUserTokenInfo } from '../utils/auth'

const initialState = {
  loggingIn: false,
  isAuthenticated: isAuthenticated(),
  user: getUserTokenInfo()
}

function auth (state = initialState, action = {}) {
  switch (action.type) {
    case 'LOGIN_ATTEMPT':
      return {
        ...state,
        loggingIn: true,
        isAuthenticated: false
      }
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        loggingIn: false,
        isAuthenticated: true,
        user: action.user
      }
      case 'LOGIN_FAILURE':
        return {
          ...state,
          loggingIn: false,
          isAuthenticated: false
        }
    default:
      return state
  }
}

export default auth
