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

  renderGame(game) {
    return <p>{game.name}</p>
  }

  render() {
    return (
      <div>
        {this.state.game.name != null ? this.state.game.name : 'Loading'}
      </div>
    )
  }
}

export default LibraryItem
