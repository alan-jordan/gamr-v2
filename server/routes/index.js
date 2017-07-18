var express = require('express')
var errors = require('../lib/errors')

const request = require('superagent')
const router = express.Router()

var usersDb = require('../db/users')

require('dotenv').config()
var url = 'https://igdbcom-internet-game-database-v1.p.mashape.com'

router.get('/users', (req, res) => {
  usersDb.getUsers(req.app.get('connection'))
    .then((users) => {
      res.json(users)
    })
    .catch((err) => {
      errors.handleRouteError(err)
    })
})

router.get('/users/:id', (req, res) => {
  usersDb.getUserById(req.params.id, req.app.get('connection'))
    .then((user) => {
      res.json(user)
    })
    .catch((err) => {
      errors.handleRouteError(err)
    })
})

router.get('/users/:id/games', (req, res) => {
  usersDb.getUserGames(req.params.id, req.app.get('connection'))
    .then((games) => {
      res.json(games)
    })
    .catch((err) => {
      errors.handleRouteError(err)
    })
})

router.get('/latestusers', (req, res) => {
  usersDb.getNumUsers(3, req.app.get('connection'))
    .then((users) => {
      res.json(users)
    })
    .catch((err) => {
      errors.handleRouteError(err)
    })
})

router.get('/games/:id', (req, res) => {
  request
    .get(`${url}/games/${req.params.id}?fields=*`)
    .set('X-Mashape-Key', process.env.MASHAPEKEY)
    .set('Accept', 'application/json')
    .end((error, response) => {
      error
      ? errors.handleRouteError(error)
      : res.json(response.body)
    })
})

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
