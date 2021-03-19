import React from 'react'
import {Link} from 'react-router-dom'
import './form.css'
import {useState} from 'react'

function LoginUser () {
  const [input, setInput] = useState({
    email: '',
    password: ''
  })

  const submitLogin = (e) => {
    e.preventDefault()
    console.log('masuk')
  }

  const onChangeHandler = (e) => {
    const {value, name} = e.target
    setInput({...input, [name]: value})
  }

  return (
    <div>
      <div>
        <div id="login-form" className="container shadow">
          <h1>Share Printer</h1>
          <h5 className="mb-3 text-center">Login</h5>
          <br/>
          <form onSubmit={submitLogin}>
            <div className="mb-3">
              <div className="input-group">
                <div className="input-group-text"><i className="material-icons">email</i></div>
                <input
                type="email"
                className="form-control"
                placeholder="Email"
                name="email"
                onChange={onChangeHandler}
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
                name="password"
                onChange={onChangeHandler}
                value={input.password}
                />
              </div>
            </div>
            <div className="d-grid mb-3">
              <button type="submit" className="btn btn-warning mb-3">Login</button>
              <button type="submit" className="btn btn-outline-danger" >Cancel</button>
            </div>
            <p>Don't have any account? <Link to="/registerUser">Register Here !</Link></p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginUser