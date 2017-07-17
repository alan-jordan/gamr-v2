import React from 'react'
import {connect} from 'react-redux'

import {getSearchTerm} from '../../actions/'

const AddGameSearch = (props) => {

  function handleChange(e) {
    e.preventDefault()
    e.target.name = e.target.value
    props.dispatch(getSearchTerm(e.target.value))
  }

  function renderResults() {
    return (
      <div>
        <ul className='addGame'>
          {props.searchGames.searchResults && props.searchGames.searchResults.map((result, i) => {
            return <li key={i} className='addGameResult' value={result.id}>{result.name}</li>
          })}
        </ul>
      </div>
    )
  }

  return (
    <form>
      <div className='row'>
        <div className='six columns'>
          <label htmlFor="searchBar">Search for a game</label>
          <input className="u-full-width" type="text" placeholder="search" id="searchBar" onChange={(e =>handleChange(e))}/>
          {renderResults()}
        </div>
      </div>
      <br />
      {/* <input className="button-primary" type="submit" value="Add game" /> */}
    </form>
  )
}

export default connect()(AddGameSearch)
