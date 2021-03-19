import React from 'react'
import { Link } from 'react-router-dom'
import {useState} from 'react'

function RegisterUser () {
  const [input, setInput] = useState({
    email: '',
    username: '',
    password: ''
  })


  return (
    <div className="container-form d-flex flex-column justify-content-center">
      <h1 className="text-center">Register</h1>     
      <div className="d-flex justify-content-center align-items-center">     
        <form>
          <label className="form-label" for="email">
            Email
          </label> 
          <div className="mb-3 input-group">
            <span className="input-group-text">
              <i className="material-icons">email</i>
            </span>
            <input type="email" placeholder="Email" className="form-control" id="email" />
          </div>
          <label className="form-label" for="username">
            Username
          </label> 
          <div className="mb-3 input-group">
            <span className="input-group-text">
              <i className="material-icons">person</i>
            </span>
            <input type="text" placeholder="Username" className="form-control" id="username" />
          </div>
          <label className="form-label" for="password">
            Password
          </label> 
          <div className="mb-3 input-group">
            <span className="input-group-text">
              <i className="material-icons">lock</i>
            </span>
            <input type="password" placeholder="Password" className="form-control" id="username" />
          </div>
          <div className="d-flex justify-content-between">
            <div>
              <button
                className="btn btn-primary"
                type="button"
              >
                Register
              </button>
            </div>      
            <div className="">
              <Link to="/loginUser" className="">Login Here</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default RegisterUser