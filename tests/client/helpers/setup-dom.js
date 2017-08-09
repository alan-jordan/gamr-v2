require('babel-register')

const { JSDOM } = require('jsdom')

const dom = new JSDOM('<body></body>')

global.window = dom.window
dom.window.localStorage = {
  token: '',
  getItem: (key) => {
    return dom.window.localStorage[key]
  },
  setItem: (key, value) => {
    dom.window.localStorage[key] = value
  },
  removeItem: (key) => {
    dom.window.localStorage[key] = null
  }
}
global.window.scroll = () => {}
global.document = dom.window.document
global.navigator = dom.window.navigator
