import React from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import './sideNavbar.css'
import logo from '../assets/sharep.png'

function SideNavbar () {

  const history = useHistory()

  const logout = () => {
    localStorage.removeItem('access_token')
    history.push('/loginShop')
  }

  return (
    <div>
      <div className="wrapper">
        <nav id="sidebar" className="shadow">
          <img src={logo} alt="logo" id="logo"/>
          <ul className="list-unstyled components">
            <li className="nav-item">
              <NavLink exact to='/' className="nav-link" activeClassName="active-bar">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to='/addProduct' activeClassName="active-bar">Add Product</NavLink>
            </li>
          </ul>
          <div className="d-flex justify-content-center ">
            <button className="btn btn-danger fw-bold fs-5" id="btn-logout" onClick={logout}>Logout</button>
          </div>
        </nav> 
      </div>
    </div>
  )
}

export default SideNavbar