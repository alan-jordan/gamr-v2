function game (state = {}, action = {}) {
  switch (action.type) {
    case 'SET_GAME_DETAILS':
      return action.game
    default:
      return state
  }
}

export default game
