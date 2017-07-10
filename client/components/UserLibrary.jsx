import React from 'react'
import {connect} from 'react-redux'

class UserLibrary extends React.Component {


  render() {
    return (
      <div></div>
    )
  }

}

const mapStateToProps = (state) => {
  return {user: state.user}
}

export default connect(mapStateToProps)(UserLibrary)
