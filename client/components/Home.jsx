import React from 'react'
import FrontPageContainer from '../containers/FrontPageContainer'

export default class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <div className='frontPage'>
        <div className='intro'>
          <div className='introText'>
            <h2>Discover new games.</h2>
            <h2>Track your collection.</h2>
            <h2>Track time spent.</h2>
            <h2>Connect with other gamrs.</h2>
          </div>
        </div>
        { <FrontPageContainer /> }
      </div>
    )
  }
}
