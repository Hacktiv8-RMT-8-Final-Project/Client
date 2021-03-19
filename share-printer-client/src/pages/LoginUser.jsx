import React from 'react'
import {Link} from 'react-router-dom'
import './style.css'
import {useState} from 'react'

function LoginUser () {
  const [input, setInput] = useState({
    email: '',
    password: ''
  })


  return (
    <div className="container-form d-flex flex-column justify-content-center">
      <h1 className="text-center">Login</h1>     
      <div className="d-flex justify-content-center align-items-center">     
        <form>
          <label className="form-label" for="password">
            Email
          </label> 
          <div className="mb-3 input-group">
            <span className="input-group-text">
              <i className="material-icons">email</i>
            </span>
            <input type="text" placeholder="Email" className="form-control"/>
          </div>
          <label className="form-label" for="password">
            Password
          </label> 
          <div className="mb-3 input-group">
            <span className="input-group-text">
              <i className="material-icons">lock</i>
            </span>
            <input type="password" placeholder="Password" className="form-control"/>
          </div>
          <div className="d-flex justify-content-between">
            <div>
              <button
                className="btn btn-primary"
                type="button"
              >
                Log In
              </button>
            </div>      
            <div className="">
              <Link to="/registerUser" className="">Register Here</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginUser