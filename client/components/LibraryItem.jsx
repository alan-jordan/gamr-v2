import React from 'react'
import request from 'superagent'
import moment from 'moment'

class LibraryItem extends React.Component {
  constructor(props) {
    console.log(props);
    super(props)
    this.state = {
      gameId: props.gameId,
      gameStatus: props.gameStatus,
      game: {},
      error: ''
    }
  }

  getGameDetails(gameId) {
    return new Promise((resolve, reject) => {
      request
      .get(`/api/v1/games/${gameId}`)
      .end((error, response) => {
        error ? reject(error) : resolve(response.body)
      })
    })
  }

  checkFormat(user_game_format) {
    return user_game_format == 1 ? 'Physical' : 'Virtual'
  }

  componentDidMount() {
    this.getGameDetails(this.state.gameId)
    .then((game) => {
      this.setState({game: game[0]})
    })
  }

  render() {
    return (
      <div className='galleryGame'>
        <div className='gameCover'>
            {this.state.game.cover
              ? <a href={`/#/users/${this.state.gameStatus.user_id}/games/${this.state.gameStatus.igdb_game_id}`}><img src={`https://images.igdb.com/igdb/image/upload/t_cover_big/${this.state.game.cover.cloudinary_id}.jpg`}/></a>
              : <p>loading image</p>
            }
          </div>
      </div>
    )
  }
}

export default LibraryItem
