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
              <a className='button' onClick={(e) => this.addGameToggle(e)}>cancel</a>
            </div>
          : <a className='button' onClick={(e) => this.addGameToggle(e)}>Add Game</a>
}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {addGame: state.addGame, user: state.user}
}

export default connect(mapStateToProps)(AddGame)
