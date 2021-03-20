import React from 'react';
import { Link } from 'react-router-dom';
import {useState} from 'react';
import '../styles/form.css';
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

  const [places, setPlaces] = useState([])

  const submitRegister = (e) => {
    e.preventDefault()
    console.log(input)
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
            <div style={{ height: '50vh', width: '94%' }} className="my-2">
              <label className="form-label fs-5 text-light">Locate</label>
              <Map
                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBzD7RM95yQyWvUuElp9RIe6YC5whFL37k"
                loadingElement={<div style={{ height: `50%` }} />}
                containerElement={<div style={{ height: `400px` }} />}
                mapElement={<div style={{ height: `100%` }} />}
                setLocate={setLocate}
              />
              {/* <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyBzD7RM95yQyWvUuElp9RIe6YC5whFL37k" }}
                defaultCenter={center}
                defaultZoom={12}>
              </GoogleMapReact> */}
            </div>
            <div>
              <input type="submit" value="Register" />
            </div>
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