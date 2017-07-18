import test from 'ava'
import request from 'supertest'
import nock from 'nock'
import * as gameExample from './helpers/gameExample'

const createServer = require('../../server/server')
const url = 'https://igdbcom-internet-game-database-v1.p.mashape.com'

var configureDatabase = require('./helpers/database-config')
configureDatabase(test, createServer)

test('/search/:searchStr', t => {
  let scope = nock(url)
    .get(`/games/?fields=name,cover,first_release_date&search=shenmue&order=release_dates.date:desc:min&limit=10`)
    .reply(200, gameExample.searchResult)

  return request(t.context.app)
    .get('/api/v1/search/shenmue')
    .expect(200)
    .then((result) => {
      return new Promise((resolve, reject) => {
        t.is(result.body[0].name, 'Shenmue III')
        t.is(result.body.length, 4)
        scope.done()
        resolve()
      })
    })
})
