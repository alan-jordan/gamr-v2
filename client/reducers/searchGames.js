function searchGames (state = {}, action = {}) {
  console.log(action);
  switch (action.type) {
    case 'SET_SEARCH_RESULTS':
      return action.searchResults
    default:
      return state
  }
}

export default searchGames
