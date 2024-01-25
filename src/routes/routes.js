import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

import Home from '../Containers/Home'
import Login from '../Containers/Login'
import Register from '../Containers/Register'
import PrivateRoute from './private-route'

function Routes() {
  return (
    <Router>
      <Switch>
        <Route component={Login} path="/login" />
        <Route component={Register} path="/cadastro" />
        <PrivateRoute exact component={Home} path="/" />
      </Switch>
    </Router>
  )
}

export default Routes
