import React from 'react'
import {connect} from 'react-redux'

import {getGameDetails} from '../actions/'

class LibraryItem extends React.Component {

  componentDidMount() {
    this.props.dispatch(getGameDetails(this.props.gameId))
  }

  renderGame(game) {
    return <p>{game.name}</p>
  }

  render() {
    return (
      <div>{this.props.game.length > 0 ? this.renderGame(this.props.game[0]) : 'lose'}</div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return { game: state.game }
}

export default connect(mapStateToProps)(LibraryItem)
