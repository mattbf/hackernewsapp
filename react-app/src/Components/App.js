import React, { Component } from 'react'
import LinkList from './LinkList'
import CreateLink from './CreateLink'
import Header from './Header'
import { Switch, Route } from 'react-router-dom'
import GlobalRouter from '../GlobalRouter'

class App extends Component {
  render() {
    return (
      <GlobalRouter>
        <div className="center w85">
          <Header />
        </div>
      </GlobalRouter>
    )
  }
}

export default App
