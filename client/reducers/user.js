function user (state = {user: {}, games: [], gameDetails: []}, action = {}) {
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
    case 'SET_USER_GAME_DETAILS':
      let gameDetail = state.gameDetails.concat(action.game)
      return {
        ...state,
        gameDetails: gameDetail
      }
    default:
      return state
  }
}

export default user
