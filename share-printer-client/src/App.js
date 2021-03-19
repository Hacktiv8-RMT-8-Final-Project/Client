import React from 'react'
import {
  Switch,
  Route,
} from "react-router-dom";

import LoginUser from './pages/LoginUser'
import RegisterUser from './pages/RegisterUser'
import Home from './pages/Home'
import Navbar from './components/Navbar';

function App () {
  return (
    <>
      <Navbar />
        <Switch>
          <Route path="/registerUser">
            <RegisterUser />
          </Route>
          <Route path="/loginUser">
            <LoginUser />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </>
  )
}

export default App