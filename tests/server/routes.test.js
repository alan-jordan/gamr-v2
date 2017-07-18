import test from 'ava'
import request from 'supertest'
import nock from 'nock'
import sinon from 'sinon'

import * as gameExample from './helpers/gameExample'
const createServer = require('../../server/server')
const url = 'https://igdbcom-internet-game-database-v1.p.mashape.com'

var configureDatabase = require('./helpers/database-config')
configureDatabase(test, createServer)

test('GET /users/', t => {
  return request(t.context.app)
    .get('/api/v1/users')
    .expect(200)
    .then((result) => {
      return new Promise((resolve, reject) => {
        t.is(result.body.length, 4)
        resolve()
      })
    })
})

test.cb('Get /users handles errors', t => {
  request (t.context.app)
    .get('/api/v1/users')
    .expect(200)
    .end((err, res) => {
      err ? console.log(err) : console.log(res)
    })
})

// test('/search/:searchStr', t => {
//   let scope = nock('http://localhost:80')
//     .get(`/api/v1/users`)
//     .reply(500, {msg: 'error'})
//
//   return request(t.context.app)
//     .get('/api/v1/users')
//     .expect(500)
//     .then((result) => {
//       return new Promise((resolve, reject) => {
//         console.log(result);
//         scope.done()
//         resolve()
//       })
//     })
// })

test('GET /users/:id', t => {
  return request(t.context.app)
    .get('/api/v1/users/1')
    .expect(200)
    .then((result) => {
      return new Promise((resolve, reject) => {
        t.is(result.body.user_username, 'eljordy')
        resolve()
      })
    })
})

test('GET /users/:id/games', t => {
  return request(t.context.app)
    .get('/api/v1/users/1/games')
    .expect(200)
    .then((result) => {
      return new Promise((resolve, reject) => {
        t.is(result.body.length, 5)
        resolve()
      })
    })
})

test('Get /latestusers', t => {
  return request(t.context.app)
    .get('/api/v1/latestusers')
    .expect(200)
    .then((result) => {
      return new Promise((resolve, reject) => {
        t.is(result.body.length, 3)
        resolve()
      })
    })
})

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
