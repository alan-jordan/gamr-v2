import test from 'ava'
import React from 'react'
import {Provider} from 'react-redux'
import { shallow, mount, render } from 'enzyme'

import './helpers/setup-dom'
import store from '../../client/store'
import Home from '../../client/components/Home'

test('front page class exists', t => {
  const wrapper = mount(
    <Provider store={store}>
      <Home />
    </Provider>
  )
  t.is(wrapper.find('.frontPage').exists(), true)
})

test('Four h2 tags on front page', t => {
  const wrapper = mount(
    <Provider store={store}>
      <Home />
    </Provider>
  )
  t.is(wrapper.find('.introText').children().length, 4)
  t.is(wrapper.find('.introText').children().first().text(), 'Discover new games.')
})
