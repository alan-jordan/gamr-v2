import test from 'ava'
import React from 'react'
import { shallow, mount, render } from 'enzyme'

import './helpers/setup-dom'
import App from '../../client/components/App'

App.prototype.componentDidMount = () => {}

test('Container class exists', t => {
  const wrapper = mount(<App />)
  t.is(wrapper.find('.header').exists(), true)
})

test('intro page rendering right', t => {
  const wrapper = mount(<App />)
  const Home = wrapper.find(Home)
  console.log(Home);
  t.is(wrapper.find('.intro').exists(), true)
  // t.is(Home.exists(), true)
})
