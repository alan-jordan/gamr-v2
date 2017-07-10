function user (state = {user: {}, games: []}, action = {}) {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.user
      }
    case 'SET_USER_GAMES':
      return {
        ...state,
        games: action.games
      }
    default:
      return state
  }
}

export default user
