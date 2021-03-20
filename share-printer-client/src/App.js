import React from 'react'
import {
  Switch,
  Route,
} from "react-router-dom";

import LoginUser from './pages/LoginUser'
import RegisterUser from './pages/RegisterUser'
import Home from './pages/Home'
import Navbar from './components/Navbar';
import PrintForm from './pages/PrintForm';
import History from './pages/History'

function App () {
  return (
    <>
      <Navbar />
        <Switch>
          <Route path="/registerUser">
            <RegisterUser />
          </Route>
          <Route path="/printForm">
            <PrintForm />
          </Route>
          <Route path="/history">
            <History />
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