import React from 'react'
import {connect} from 'react-redux'

const AddGameSearch = (props) => {
  return (
    <form>
      <div className='row'>
        <div className='six columns'>
          <label htmlFor="searchBar">Search for a game</label>
          <input className="u-full-width" type="text" placeholder="search" id="searchBar" />
        </div>
      </div>
      <br />
      {/* <input className="button-primary" type="submit" value="Add game" /> */}
    </form>
  )
}

export default connect()(AddGameSearch)
