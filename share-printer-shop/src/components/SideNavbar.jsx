import React from 'react'
import { NavLink, useParams } from 'react-router-dom'
import './sideNavbar.css'
import logo from '../assets/sharep.png'

function SideNavbar () {
  const currentPath = window.location.pathname
  console.log(currentPath)
  return (
    <div>
      <div className="wrapper">
        <nav id="sidebar" className="shadow">
          <img src={logo} alt="logo" id="logo"/>
          {
            currentPath === '/' ?
            <ul className="list-unstyled components">
              <li className="active nav-item">
                <NavLink to='/' classNameName="nav-link">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to='/productCollection'>Product Collection</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to='/addProduct'>Add Product</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to='/history'>History</NavLink>
              </li>
            </ul> :

            currentPath === '/productCollection' ?
            <ul className="list-unstyled components">
              <li className="nav-item">
                <NavLink to='/' classNameName="nav-link">Home</NavLink>
              </li>
              <li className="active nav-item">
                <NavLink to='/productCollection'>Product Collection</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to='/addProduct'>Add Product</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to='/history'>History</NavLink>
              </li>
            </ul>:

            currentPath === '/addProduct' ?
            <ul className="list-unstyled components">
              <li className="nav-item">
                <NavLink to='/' classNameName="nav-link">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to='/productCollection'>Product Collection</NavLink>
              </li>
              <li className="nav-item active">
                <NavLink to='/addProduct'>Add Product</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to='/history'>History</NavLink>
              </li>
            </ul>:

            <ul className="list-unstyled components">
            <li className="e nav-item">
              <NavLink to='/' classNameName="nav-link">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to='/productCollection'>Product Collection</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to='/addProduct'>Add Product</NavLink>
            </li>
            <li className="active nav-item">
                <NavLink to='/history'>History</NavLink>
              </li>
          </ul>
          }
          
          <div className="d-flex justify-content-center ">
            <button className="btn btn-danger fw-bold fs-5" id="btn-logout">Logout</button>
          </div>
        </nav> 
      </div>
    </div>
  )
}

export default SideNavbar