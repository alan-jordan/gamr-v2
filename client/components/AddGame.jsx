import React from 'react'
import {connect} from 'react-redux'
import {addGameVisibleToggle} from '../actions/'

class AddGame extends React.Component {

  // Need to create an add visible toggle off and on
  // Then some checking on whether a user has a game or not already
  // Then some glue back to the API to post some datas

  addGameToggle(e) {
    this.props.dispatch(addGameVisibleToggle(this.props.addGame))
  }

  render() {
    return (
      <div className='addGame'>
        <h2 onClick={(e) => this.addGameToggle(e)}>Add Game</h2>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {addGame: state.addGame}
}

export default connect(mapStateToProps)(AddGame)
