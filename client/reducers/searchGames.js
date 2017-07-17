function searchGames (state = { searchResults: [], searchTerm: '' }, action = {}) {
  switch (action.type) {
    case 'SET_SEARCH_RESULTS':
      return {
        ...state,
        searchResults: action.searchResults
      }
    case 'SET_SEARCH_TERM':
      return {
        ...state,
        searchTerm: action.searchTerm
      }
    default:
      return state
  }
}

export default searchGames
