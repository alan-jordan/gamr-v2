import React from 'react'
import request from 'superagent'

class UserLibrary extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user: props.user
    }
  }

  componentDidMount(props) {
    console.log(this.props);
  }

   getGameDetails(games) {
    return games.map((game) => {
      request
        .get(`/api/v1/games/${game.igdb_game_id}`)
        .end((err, res) => {
          return err ? err : res.body
        })
    })
  }


  render() {
    return (
      <div></div>
    )
  }
}

export default UserLibrary
