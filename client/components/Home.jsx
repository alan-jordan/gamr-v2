import React from 'react'

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
          <h2>Welcome to gamr. Discover new games, and track your collection.</h2>
        </div>
        <div className='newGamrs'>
          <ul>
            <li>gamr 1</li>
            <li>gamr 2</li>
          </ul>
        </div>
      </div>
    )
  }
}
