import React from 'react'
import { NavLink, useParams, useHistory } from 'react-router-dom'
import './sideNavbar.css'
import logo from '../assets/sharep.png'

function SideNavbar () {

  const history = useHistory()

  const logout = () => {
    localStorage.removeItem('access_token')
    localStorage.removeItem('email')
    history.push('/loginShop')
  }

  const currentPath = window.location.pathname

  return (
    <div>
      <div className="wrapper">
        <nav id="sidebar" className="shadow">
          <img src={logo} alt="logo" id="logo"/>
          {
            currentPath === '/' ?
            <ul className="list-unstyled components">
              <li className="active nav-item">
                <NavLink to='/' className="nav-link"><div className="d-flex gap-2 mt-2"><i  className="material-icons">home</i>Home </div></NavLink>
              </li>
              <li className="nav-item">
                <NavLink to='/productCollection'><div className="d-flex gap-2 mt-2"><i className="material-icons">description</i>Product Collection</div></NavLink>
              </li>
              <li className="nav-item">
                <NavLink to='/addProduct'><div className="d-flex gap-2 mt-2"><i className="material-icons">add_circle</i>Add Product</div></NavLink>
              </li>
              <li className="nav-item">
                <NavLink to='/history'><div className="d-flex gap-2 mt-2"><i className="material-icons">history</i>History</div></NavLink>
              </li>
            </ul> :

            currentPath === '/productCollection' ?
            <ul className="list-unstyled components">
              <li className="nav-item">
                <NavLink to='/' className="nav-link"><div className="d-flex gap-2 mt-2"><i  className="material-icons">home</i>Home </div></NavLink>
              </li>
              <li className="active nav-item">
                <NavLink to='/productCollection'><div className="d-flex gap-2 mt-2"><i className="material-icons">description</i>Product Collection</div></NavLink>
              </li>
              <li className="nav-item">
                <NavLink to='/addProduct'><div className="d-flex gap-2 mt-2"><i className="material-icons">add_circle</i>Add Product</div></NavLink>
              </li>
              <li className="nav-item">
                <NavLink to='/history'><div className="d-flex gap-2 mt-2"><i className="material-icons">history</i>History</div></NavLink>
              </li>
            </ul>:

            currentPath === '/addProduct' ?
            <ul className="list-unstyled components">
              <li className="nav-item">
                <NavLink to='/' className="nav-link"><div className="d-flex gap-2 mt-2"><i  className="material-icons">home</i>Home </div></NavLink>
              </li>
              <li className="nav-item">
                <NavLink to='/productCollection'><div className="d-flex gap-2 mt-2"><i className="material-icons">description</i>Product Collection</div></NavLink>
              </li>
              <li className="nav-item active">
                <NavLink to='/addProduct'><div className="d-flex gap-2 mt-2"><i className="material-icons">add_circle</i>Add Product</div></NavLink>
              </li>
              <li className="nav-item">
                <NavLink to='/history'><div className="d-flex gap-2 mt-2"><i className="material-icons">history</i>History</div></NavLink>
              </li>
            </ul>:

            <ul className="list-unstyled components">
            <li className="e nav-item">
              <NavLink to='/' className="nav-link"><div className="d-flex gap-2 mt-2"><i  className="material-icons">home</i>Home </div></NavLink>
            </li>
            <li className="nav-item">
              <NavLink to='/productCollection'><div className="d-flex gap-2 mt-2"><i className="material-icons">description</i>Product Collection</div></NavLink>
            </li>
            <li className="nav-item">
              <NavLink to='/addProduct'><div className="d-flex gap-2 mt-2"><i className="material-icons">add_circle</i>Add Product</div></NavLink>
            </li>
            <li className="active nav-item">
                <NavLink to='/history'><div className="d-flex gap-2 mt-2"><i className="material-icons">history</i>History</div></NavLink>
              </li>
          </ul>
          }
          
          <div className="d-flex justify-content-center ">
            <button className="btn btn-danger fw-bold fs-5" id="btn-logout" onClick={logout}>Logout</button>
          </div>
        </nav> 
      </div>
    </div>
  )
}

export default SideNavbar