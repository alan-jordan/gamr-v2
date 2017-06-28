import React from 'react'
import {connect} from 'react-redux'

import {fetchUser} from '../actions/'
import UserLibrary from '../components/UserLibrary'
import UserInfoLibrary from '../components/UserInfoLibrary'

class UserLibraryContainer extends React.Component {
  componentDidMount () {
    this.props.dispatch(fetchUser(this.props.match.params.id))
  }

  render () {
    return (
      <div>
        <UserInfoLibrary user={this.props.user} />
        <UserLibrary user={this.props.user} />
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    user: state.user
  }
}

UserLibraryContainer = connect(mapStateToProps)(UserLibraryContainer)
export default UserLibraryContainer
