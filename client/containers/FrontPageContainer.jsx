import React from 'react'
import {connect} from 'react-redux'

import NewUsers from '../components/NewUsers'
import {fetchLatestUsers} from '../actions/'

class FrontPageContainer extends React.Component {
  componentDidMount () {
    this.props.dispatch(fetchLatestUsers())
  }

  render () {
    return (
      <NewUsers users={this.props.users} />
    )
  }
}

function mapStateToProps (state) {
  return {
    users: state.users
  }
}

FrontPageContainer = connect(mapStateToProps)(FrontPageContainer)
export default FrontPageContainer
