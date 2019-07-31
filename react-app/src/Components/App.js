import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Switch, Route } from 'react-router-dom'
import Header from './Header'
import LinkList from './LinkList'
import CreateLink from './CreateLink'
import Login from './Login'
import Search from './Search'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="center w85">
          <Header />
          <div className="ph3 pv1 background-gray">
            <Switch>
              <Route exact path="/" component={LinkList} />
              <Route exact path="/create" component={CreateLink} />
              <Route exact path="/login" component={Login} />
              <Route exact path='/search' component={Search} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
