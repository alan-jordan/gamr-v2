var path = require('path')
var express = require('express')
var bodyParser = require('body-parser')
const cors = require('cors')

const passport = require('passport')
const LocalStrategy = require('passport-local')
const auth = require('./lib/auth')

var users = require('./routes/users')
var games = require('./routes/games')
var search = require('./routes/search')

const corsOptions = {
  origin: true,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  preflightContinue: false,
  credentials: true
}

var app = express()
app.use(cors(corsOptions))

app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, '../public')))

app.use('/api/v1', users)
app.use('/api/v1', games)
app.use('/api/v1', search)

app.use(passport.initialize())
passport.use(new LocalStrategy(auth.verify))

module.exports = (connection) => {
  app.set('connection', connection)
  return app
}
