function addGameVisible (state = false, action) {
  switch (action.type) {
    case 'TOGGLE_ADD_GAME_VISIBLE':
      return true
    case 'TOGGLE_ADD_GAME_NOT_VISIBLE':
      return false
    default:
      return state
  }
}

export default addGameVisible
