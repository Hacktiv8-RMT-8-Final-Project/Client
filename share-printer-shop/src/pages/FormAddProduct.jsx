import React from 'react'

import {
  Switch,
  Route,
  Link,
  NavLink,
  useRouteMatch
} from "react-router-dom";

import '../styles/style.css'
import FormColorOption from './FormColorOption'
import FormJilid from './FormJilidOption'
import FormPaperType from './FormPaperType'
import FormWeightOption from './FormWeightOption'

function FormAddProduct () {
  let { path, url } = useRouteMatch();
  return (
    <div>
      <nav className="navbar navbar-expand navbar-light bg-light shadow-sm mb-5" id="child-navbar">
      <div className="container-fluid">
        {/* <i className="material-icons fs-5">print</i> */}
        {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button> */}
        <div className="collapse navbar-collapse" id="navbarSupportedContents">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to={`${url}/formPaperType`}>Paper Type</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={`${url}/formJilid`}>Jilid Option</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={`${url}/formColorOption`}>Color Option</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={`${url}/formWeightOption`}>Form Weight Option</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
      <Switch>
        <Route exact path={path}>
          <FormPaperType />
        </Route>
        <Route path={`${path}/formPaperType`}>
          <FormPaperType />
        </Route>
        <Route path={`${path}/formJilid`}>
          <FormJilid />
        </Route>
        <Route path={`${path}/formColorOption`}>
          <FormColorOption />
        </Route>
        <Route path={`${path}/formWeightOption`}>
          <FormWeightOption />
        </Route>
      </Switch>
    </div>
  ) 
}

export default FormAddProduct