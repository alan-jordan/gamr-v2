import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Header from './Header'
import Home from './Home'
import UserLibraryContainer from '../containers/UserLibraryContainer'
import Footer from './Footer'

export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  }

  render () {
    return (
      <Router>
        <div className='app-container'>
          <Header />
          <Route path='/' exact component={Home} />
          <Route path='/users/:id/library' exact component={UserLibraryContainer} />
          <Footer />
        </div>
      </Router>
    )
  }
}
