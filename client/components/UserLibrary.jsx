import React from 'react'
import {connect} from 'react-redux'

import LibraryItem from './LibraryItem'

class UserLibrary extends React.Component {

  mapGames (games) {
    return games.map((game) => {
      return <LibraryItem gameId={game.igdb_game_id} />
    })
  }

  render() {
    return (
      <div className = 'gallery'>
        {this.props.user.games.length > 0
          ? this.mapGames(this.props.user.games)
          : <h2>No games in user's library.</h2>}
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {user: state.user}
}

export default connect(mapStateToProps)(UserLibrary)
