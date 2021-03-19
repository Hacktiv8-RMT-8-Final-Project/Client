import React from 'react'
import { Link } from 'react-router-dom'
import {useState} from 'react'
import './form.css'

function RegisterShop () {
  const [input, setInput] = useState({
    email: '',
    username: '',
    password: '',
    nameShop: ''
  })

  const submitRegister = (e) => {
    e.preventDefault()
    console.log('masuk')
  }

  const onChangeHandler = (e) => {
    const {value, name} = e.target
    setInput({...input, [name]: value})
  }


  return (
    <div className="main-w3layouts wrapper">
      <h1>Register</h1>
      <div className="main-agileinfo">
        <div className="agileits-top">
          <form onSubmit={submitRegister}>
            <div>
              <label className="form-label fs-5 text-light">Name Shop</label>
              <input className="text" type="text" name="nameShop" placeholder="Name Shop" onChange={onChangeHandler} />
            </div>
            <div>
              <label className="form-label fs-5 text-light">Email</label>
              <input className="text email" type="email" name="email" placeholder="Email" onChange={onChangeHandler} />
            </div>
            <div>
              <label className="form-label fs-5 text-light">Username</label>
              <input className="text" type="text" name="username" placeholder="username" onChange={onChangeHandler} />
            </div>
            <div>
              <label className="form-label fs-5 text-light">Password</label>
              <input className="text" type="password" name="password" placeholder="Password" onChange={onChangeHandler} />
            </div>
            <input type="submit" value="Register" />
          </form>
          <p>Don't have an Account? <Link to="/loginShop">Login Now!</Link></p>
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

export default RegisterShop