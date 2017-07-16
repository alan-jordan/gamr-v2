var express = require('express')
var router = express.Router()
var request = require('superagent')

var usersDb = require('../db/users')

require('dotenv').config()
var url = 'https://igdbcom-internet-game-database-v1.p.mashape.com'

router.get('/users', (req, res) => {
  usersDb.getUsers(req.app.get('connection'))
    .then(function (users) {
      res.json(users)
    })
    .catch(function (err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/users/:id', (req, res) => {
  usersDb.getUserById(req.params.id, req.app.get('connection'))
    .then(function (user) {
      res.json(user)
    })
    .catch(function (err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/users/:id/games', (req, res) => {
  usersDb.getUserGames(req.params.id, req.app.get('connection'))
    .then((games) => {
      res.json(games)
    })
    .catch((err) => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/latestusers', (req, res) => {
  usersDb.getNumUsers(3, req.app.get('connection'))
    .then((users) => {
      res.json(users)
    })
    .catch(function (err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/games/:id', (req, res) => {
  request
    .get(`${url}/games/${req.params.id}?fields=*`)
    .set('X-Mashape-Key', process.env.MASHAPEKEY)
    .set('Accept', 'application/json')
    .end((error, response) => {
      error
      ? res.status(500).send('DATABASE ERROR: ' + error.message)
      : res.json(response.body)
    })
})

router.get('/search/:searchStr', (req, res) => {
  request
    .get(`${url}/games/search=${req.params.searchStr}`)
    .set('X-Mashape-Key', process.env.MASHAPEKEY)
    .set('Accept', 'application/json')
    .end((error, response) => {
      console.log(error);
      error
      ? res.status(500).send(`IGDB API error - ${error.message}`)
      : res.json(response.body)
    })
})

module.exports = router
