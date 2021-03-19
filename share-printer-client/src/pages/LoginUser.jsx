import React from 'react'
import {Link} from 'react-router-dom'

function LoginUser () {
  return (
    <div className="h-100">
      <h1 className="text-center">Login</h1>     
      <div className="d-flex justify-content-center align-items-center">     
        <form>
          <label className="form-label" for="password">
            Email
          </label> 
          <div className="mb-3">
            <span className="">
              {/* <i className="">email</i> */}
            </span>
            <input type="text" placeholder="Email" className="form-control"/>
          </div>
          <label className="form-label" for="password">
            Password
          </label> 
          <div className="mb-3">
            <span className="">
              {/* <i className="fa-lock">lock</i> */}
            </span>
            <input type="text" placeholder="Password" className="form-control"/>
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