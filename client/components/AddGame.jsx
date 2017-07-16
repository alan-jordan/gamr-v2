import React from 'react'
import {connect} from 'react-redux'
import {addGameVisibleToggle} from '../actions/'

class AddGame extends React.Component {

  // Then some checking on whether a user has a game or not already
  // Then some glue back to the API to post some datas

  addGameToggle(e) {
    this.props.dispatch(addGameVisibleToggle(this.props.addGame))
  }

  render() {
    return (
      <div className='addGame'>
        {this.props.addGame ?
          <div>
            <p>Blahs</p>
            <h2 onClick={(e) => this.addGameToggle(e)}>cancel</h2>
          </div>
          : <h2 onClick={(e) => this.addGameToggle(e)}>Add Game</h2>
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    addGame: state.addGame,
    user: state.user,
  }
}

export default connect(mapStateToProps)(AddGame)
