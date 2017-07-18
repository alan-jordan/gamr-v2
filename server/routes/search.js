var express = require('express')
var errors = require('../lib/errors')
const router = express.Router()
const request = require('superagent')

require('dotenv').config()
var url = 'https://igdbcom-internet-game-database-v1.p.mashape.com'

router.get('/search/:searchStr', (req, res) => {
  request
    .get(`${url}/games/?fields=name,cover,first_release_date&search=${req.params.searchStr}&order=release_dates.date:desc:min&limit=10`)
    .set('X-Mashape-Key', process.env.MASHAPEKEY)
    .set('Accept', 'application/json')
    .end((error, response) => {
      error
      ? errors.handleRouteError(error)
      : res.json(response.body)
    })
})

module.exports = router
