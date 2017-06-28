import test from 'ava'
import React from 'react'
import {Provider} from 'react-redux'
import { shallow, mount, render } from 'enzyme'

import './helpers/setup-dom'
import App from '../../client/components/App'
import store from '../../client/store'

App.prototype.componentDidMount = () => {}

test('Container class exists', t => {
  const wrapper = mount(
    <Provider store={store}>
      <App />
    </Provider>
  )
  t.is(wrapper.find('.header').exists(), true)
  t.is(wrapper.find('.intro').exists(), true)
})
