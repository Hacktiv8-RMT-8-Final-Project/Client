import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/form.css'
import {useState} from 'react'

function LoginShop () {
  const [input, setInput] = useState({
    email: '',
    password: ''
  })

  const submitLogin = (e) => {
    e.preventDefault()
    console.log('masuk')
  }

  const onChangeHandler = (e) => {
    const {value, name} = e.target.value
    setInput({...input, [name]: value})
  }

  return (
    <div className="main-w3layouts wrapper-login">
      <h1>Login</h1>
      <div className="main-agileinfo">
        <div className="agileits-top">
          <form onSubmit={submitLogin}>
            <div>
              <label className="form-label fs-5 text-light">Email</label>
              <input className="text email" type="email" name="email" placeholder="Email" onChange={onChangeHandler} />
            </div>
            <div>
              <label className="form-label fs-5 text-light">Password</label>
              <input className="text" type="password" name="password" placeholder="Password" onChange={onChangeHandler} />
            </div>
            <input type="submit" value="Login" />
          </form>
          <p>Don't have an Account? <Link to="/registerShop"> Register Now!</Link></p>
        </div>
      </div>
      <div className="colorlibcopy-agile">
        <p>© 2018 Share Printer Register Form</p>
      </div>
      <ul className="colorlib-bubbles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  )
}

export default LoginShop