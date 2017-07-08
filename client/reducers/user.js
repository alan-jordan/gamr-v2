function user (state = {}, action = {}) {
  switch (action.type) {
    case 'SET_USER':
      return action.user
    case 'SET_USER_GAMES':
      return action.games
    default:
      return state
  }
}

export default user
