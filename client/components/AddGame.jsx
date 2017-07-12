import React from 'react'
import {connect} from 'react-redux'

class AddGame extends React.Component {

  // Need to create an add visible toggle off and on
  // Then some checking on whether a user has a game or not already
  // Then some glue back to the API to post some datas

  render() {
    return (
      <div className='addGame'>
        <h2>Add Game</h2>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {game: state.game}
}

export default connect(mapStateToProps)(AddGame)
