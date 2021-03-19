import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import LoginUser from './pages/LoginUser'
import Home from './pages/Home'

function App () {
  return (
    <Router>
      <Switch>
        <Route path="/loginUser">
          <LoginUser />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}

export default App