import test from 'ava'
import request from 'supertest'
import nock from 'nock'
import * as gameExample from './helpers/gameExample'

const createServer = require('../../server/server')
const url = 'https://igdbcom-internet-game-database-v1.p.mashape.com'

var configureDatabase = require('./helpers/database-config')
configureDatabase(test, createServer)

test('/games/:id', t => {
  let scope = nock(url)
    .get('/games/16?fields=*')
    .reply(200, gameExample.igdbGame)

  return request(t.context.app)
    .get('/api/v1/games/16')
    .expect(200)
    .then((result) => {
      return new Promise((resolve, reject) => {
        t.is(result.body[0].name, 'Fallout: New Vegas')
        t.is(result.body[0].url, 'https://www.igdb.com/games/fallout-new-vegas')
        scope.done()
        resolve()
      })
    })
})
