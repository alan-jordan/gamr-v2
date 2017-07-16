import React from 'react'
import {connect} from 'react-redux'

import {addGameVisibleToggle} from '../actions/'
import AddGameSearch from './subcomponents/AddGameSearch'

class AddGame extends React.Component {

  addGameToggle(e) {
    this.props.dispatch(addGameVisibleToggle(this.props.addGame))
  }

  render() {
    return (
      <div className='addGame'>
        {this.props.addGame
          ? <div>
              <AddGameSearch />
              <p className='cancel' onClick={(e) => this.addGameToggle(e)}>cancel</p>
            </div>
          : <h2 onClick={(e) => this.addGameToggle(e)}>Add Game</h2>
}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {addGame: state.addGame, user: state.user}
}

export default connect(mapStateToProps)(AddGame)
