import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

import { Home, Login, Products, Register } from '../Containers'
import PrivateRoute from './private-route'

function Routes() {
  return (
    <Router>
      <Switch>
        <Route component={Login} path="/login" />
        <Route component={Register} path="/cadastro" />
        <PrivateRoute exact component={Home} path="/" />
        <PrivateRoute exact component={Products} path="/produtos" />
      </Switch>
    </Router>
  )
}

export default Routes
