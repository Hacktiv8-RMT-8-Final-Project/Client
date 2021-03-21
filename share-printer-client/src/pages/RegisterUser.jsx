import React from 'react'
import { Link } from 'react-router-dom'
import {useState} from 'react'
import './form.css'
import axios from 'axios'

function RegisterUser () {
  const [input, setInput] = useState({
    email: '',
    username: '',
    password: ''
  })

  const submitRegister = (e) => {
    e.preventDefault()
  }

  const onChangeHandler = (e) => {
    const {value, name} = e.target
    setInput({...input, [name]: value})
  }

  return (
    <div>
      <div id="login-form" className="container shadow">
        <h1>Share Printer</h1>
        <h5 className="mb-3 text-center">Register</h5>
        <br/>
        <form onSubmit={submitRegister}>
          <div className="mb-3">
            <div className="input-group">
              <div className="input-group-text"><i className="material-icons">person</i></div>
              <input
              type="text"
              className="form-control"
              placeholder="Username"
              onChange={onChangeHandler}
              name="username"
              value={input.username}
              />
            </div>
          </div>
          <div className="mb-3">
            <div className="input-group">
              <div className="input-group-text"><i className="material-icons">email</i></div>
              <input
              type="email"
              className="form-control"
              placeholder="Email"
              onChange={onChangeHandler}
              name="email"
              value={input.email}
              />
            </div>
          </div>
          <div className="mb-3">
            <div className="input-group">
              <div className="input-group-text"><i className="material-icons">lock</i></div>
              <input
              type="password"
              className="form-control"
              placeholder="Password"
              onChange={onChangeHandler}
              name="password"
              value={input.password}
              />
            </div>
          </div>
          <div className="d-grid mb-3">
            <button type="submit" className="btn btn-warning mb-3">Register</button>
            <button type="submit" className="btn btn-outline-danger"> Cancel</button>
          </div>
          <p>Already have an account? <Link to="/loginUser">Login Here!</Link></p>
        </form>
      </div>
    </div>
  )
}

export default RegisterUser