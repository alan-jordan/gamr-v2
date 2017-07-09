var request = require('superagent')

require('dotenv').config()

var url = 'https://igdbcom-internet-game-database-v1.p.mashape.com'

function getGame(gameId) {
  request()
    .get(`${url}/games/${gameId}?fields=*`)
    .set('X-Mashape-Key', process.env.MASHAPEKEY)
    .set('Accept', 'application/json')
    .end((err, res) => {
      err
      ? res.status(500).send('DATABASE ERROR: ' + err.message)
      : res.json(res.body)
    })
}

module.exports = {
  getGame
}
