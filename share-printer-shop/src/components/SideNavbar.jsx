import React from 'react'
import { NavLink } from 'react-router-dom'
import './sideNavbar.css'
import logo from '../assets/sharep.png'

function SideNavbar () {
  return (
    <div>
      <div className="wrapper">
        <nav id="sidebar" className="shadow">
          <img src={logo} alt="logo" id="logo"/>
          <ul className="list-unstyled components">
            <li className="active nav-item">
              <NavLink to='/' classNameName="nav-link">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to='/addProduct'>Add Product</NavLink>
            </li>
          </ul>
          <div className="d-flex justify-content-center ">
            <button className="btn btn-danger fw-bold fs-5" id="btn-logout">Logout</button>
          </div>
        </nav> 
      </div>
    </div>
  )
}

export default SideNavbar