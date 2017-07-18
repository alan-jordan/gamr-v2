var express = require('express')
var errors = require('../lib/errors')
const router = express.Router()

var usersDb = require('../db/users')

router.get('/latestusers', (req, res) => {
  usersDb.getNumUsers(3, req.app.get('connection'))
    .then((users) => {
      res.json(users)
    })
    .catch((err) => {
      errors.handleRouteError(err)
    })
})

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

module.exports = router
