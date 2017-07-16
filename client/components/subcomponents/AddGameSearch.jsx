import React from 'react'
import {connect} from 'react-redux'

const AddGameSearch = (props) => {
  return (
    <div className='addGameSearch'>
      <p>I will be a search form</p>
    </div>
  )
}

export default connect()(AddGameSearch)
