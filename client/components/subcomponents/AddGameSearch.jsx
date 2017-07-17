import React from 'react'
import {connect} from 'react-redux'

import {getSearchTerm} from '../../actions/'

const AddGameSearch = (props) => {

  function handleChange(e) {
    e.preventDefault()
    e.target.name = e.target.value
    props.dispatch(getSearchTerm(e.target.value))
  }

  return (
    <form>
      <div className='row'>
        <div className='six columns'>
          <label htmlFor="searchBar">Search for a game</label>
          <input className="u-full-width" type="text" placeholder="search" id="searchBar" onChange={(e =>handleChange(e))}/>
        </div>
      </div>
      <br />
      {/* <input className="button-primary" type="submit" value="Add game" /> */}
    </form>
  )
}

export default connect()(AddGameSearch)
