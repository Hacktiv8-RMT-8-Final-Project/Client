import React from 'react'
import {Link, useHistory} from 'react-router-dom'
import {useState} from 'react'
import '../styles/form.css'
import logo from '../assets/sharep.png'
import axios from 'axios'
import {baseUrl} from '../baseUrl'

function LoginShop () {
  const [input, setInput] = useState({
    email: '',
    password: ''
  })

  const history = useHistory()

  const submitLogin = async (e) => {
    try {
      e.preventDefault()
      let user = await axios.post(baseUrl + 'shop/login', input)
      localStorage.setItem('access_token', user.data.access_token)
      localStorage.setItem('email', user.data.email)
      history.push('/')
    }catch(err) {
      console.log(err.response.data)
    }
  }

  const onChangeHandler = (e) => {
    const {value, name} = e.target
    setInput({...input, [name]: value})
  }

  return (
    <div id="login" className="shadow d-flex">
      <img src={logo} alt="logo"/>
        <div id="login-form" className=" p-5">
          <h1 className="">Share Printer</h1>
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
            <p>Don't have any account? <Link to="/registerShop">Register Here !</Link></p>
          </form>
        </div>
      </div>
  )
}

export default LoginShop