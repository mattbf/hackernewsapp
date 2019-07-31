import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import LinkList from './Components/LinkList'
import CreateLink from './Components/CreateLink'


function GlobalRouter() {
    return (
        <Switch>
          <Route exact path="/" component={LinkList} />
          <Route exact path="/create" component={CreateLink} />
        </Switch>
    )
}

export default GlobalRouter
