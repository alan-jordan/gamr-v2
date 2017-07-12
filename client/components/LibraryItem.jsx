import React from 'react'
import request from 'superagent'
import moment from 'moment'

class LibraryItem extends React.Component {
  constructor(props) {
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
            <p>Name: {this.state.game.name}</p>
            <p>Purchased: {moment(this.state.gameStatus.user_game_date_bought).format("dddd, MMMM Do YYYY")}</p>
            <p>Release date: {moment(this.state.game.first_release_date).format("dddd, MMMM Do YYYY")}</p>
          <a href={`#/games/${this.state.gameStatus.id}`}>Edit status</a>
        </div>
      </div>
    )
  }
}

export default LibraryItem
