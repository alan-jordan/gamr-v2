import React from 'react'
import {connect} from 'react-redux'

import LibraryItem from './LibraryItem'
import AddGame from './AddGame'

class UserLibrary extends React.Component {

  mapGames (games) {
    return games.map((game) => {
      return <LibraryItem gameStatus = {game} gameId={game.igdb_game_id} />
    })
  }

  render() {
    return (
      <div>
      <AddGame />
        <div className = 'gallery'>
          {this.props.user.games.length > 0
            ? this.mapGames(this.props.user.games)
            : <h2>No games in user's library.</h2>}
        </div>
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {user: state.user}
}

export default connect(mapStateToProps)(UserLibrary)
