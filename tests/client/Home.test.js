import test from 'ava'
import React from 'react'
import { shallow, mount, render } from 'enzyme'

import './helpers/setup-dom'
import store from '../../client/store'
import Home from '../../client/components/Home'

test.skip('front page class exists', t => {
  const wrapper = mount(<Home store={store} />)
  t.is(wrapper.find('.frontPage').exists(), true)
})
