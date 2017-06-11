import React from 'react'
import {connect} from 'react-redux'

import NewGamrs from '../components/NewGamrs'
import {fetchLatestGamrs} from '../actions/'
import * as api from '../api'

class FrontPageContainer extends React.Component {
  componentDidMount () {
    this.props.dispatch(fetchLatestGamrs())
  }
  render () {
    return (
      <NewGamrs newGamrs={this.props.newGamrs}/>
    )
  }
}

function mapStateToProps (state) {
  return {
    newGamrs : state.newGamrs
  }
}

FrontPageContainer = connect(mapStateToProps)(FrontPageContainer)
export default FrontPageContainer
