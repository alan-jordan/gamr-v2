import test from 'ava'
import React from 'react'
import {mount} from 'enzyme'

import './helpers/setup-dom'
import NewUsers from '../../client/components/NewUsers'

test('display a list of users', t => {
  const users = [{user_username: 'eljordy'}, {user_username: 'itsame'}]
  const wrapper = mount(<NewUsers users={users} />)
  t.is(wrapper.find('.newUsers').children().length, 2)
  t.is(wrapper.find('.newUsers').children().first().text(), 'eljordy')
})
