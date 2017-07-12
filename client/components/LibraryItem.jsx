import React from 'react'
import request from 'superagent'

class LibraryItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      gameId: props.gameId,
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

  componentDidMount() {
    this.getGameDetails(this.state.gameId)
    .then((game) => {
      this.setState({game: game[0]})
    })
  }

  render() {
    return (
      <div className='galleryGame'>
        <div clasName='gameCover'>
            {this.state.game.cover
              ? <img src={`https://images.igdb.com/igdb/image/upload/t_cover_big/${this.state.game.cover.cloudinary_id}.jpg`}/>
              : <p>loading image</p>
            }
          </div>
          <div className='gameInfo'>
            <h3>{this.state.game.name}</h3>
          <a href={`#/games/${this.state.game_id}`}>Edit status</a>
        </div>
      </div>
    )
  }
}

export default LibraryItem
