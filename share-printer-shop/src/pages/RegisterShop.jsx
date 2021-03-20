import React from 'react'
import {Link} from 'react-router-dom'
import {useState} from 'react'
import '../styles/form.css'
import logo from '../assets/sharep.png'
// import {GoogleMapReact} from 'google-map-react';
// import {GoogleMap, Marker} from 'react-google-maps'
import Map from '../components/Map'

function RegisterShop () {
  const [input, setInput] = useState({
    email: '',
    username: '',
    password: '',
    nameShop: '',
    locate: []
  })

  const submitLogin = (e) => {
    e.preventDefault()
    console.log('masuk')
  }

  const onChangeHandler = (e) => {
    const {value, name} = e.target
    setInput({...input, [name]: value})
  }
  const setLocate = (value) => {
    const locate = {...input, locate: value}
    setInput(locate)
  }

  return (
    <div id="register" className="shadow d-flex container">
      <img src={logo} alt=""/>
        <div id="login-form" className=" p-5">
          <h1 className="">Share Printer</h1>
          <h5 className="mb-3 text-center">Register</h5>
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
              <div className="input-group-text"><i className="material-icons">home</i></div>
              <input
              type="text"
              className="form-control"
              placeholder="Shop Name"
              onChange={onChangeHandler}
              name="nameShop"
              value={input.nameShop}
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
              <button type="submit" className="btn btn-warning mb-3">Register</button>
              <button type="submit" className="btn btn-outline-danger" >Cancel</button>
            </div>
            <p>Already have an account? <Link to="/loginShop">login Here !</Link></p>
          </form>
        </div>
        <div style={{ height: '50vh', width: '300px' }} className="my-2" id="gMap">
          <label className="form-label fs-5">Location:</label>
          <Map
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBzD7RM95yQyWvUuElp9RIe6YC5whFL37k"
            loadingElement={<div style={{ height: `50%` }} />}
            containerElement={<div style={{ height: `300px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
            setLocate={setLocate}
          />
          {/* <GoogleMapReact
            bootstrapURLKeys={{ key: "AIzaSyBzD7RM95yQyWvUuElp9RIe6YC5whFL37k" }}
            defaultCenter={center}
            defaultZoom={12}>
          </GoogleMapReact> */}
        </div>
      </div>
  )
}

export default RegisterShop