import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Header from './Header'
import Home from './Home'
import UserLibraryContainer from '../containers/UserLibraryContainer'
import Footer from './Footer'
import NotFound from './NotFound'
import LoginContainer from '../containers/LoginContainer'

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
          <Route path ='/login' exact component={LoginContainer} />
          <Route path ='*' exact component={NotFound} />
          <Footer />
        </div>
      </Router>
    )
  }
}
