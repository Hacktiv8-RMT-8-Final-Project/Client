import React from 'react'
import { Link } from 'react-router-dom'

function ButtonNavHome () {
  return (
    <div className="d-flex gap-5 btn-nav-home-cotainer mt-5 justify-content-center">
      <Link to="/printForm" className="btn btn-primary btn-nav-home fw-bold fs-4 pt-3">
        Print Form
      </Link>
      <Link to="/" className="btn btn-primary btn-nav-home fw-bold fs-4 pt-3">
        Check Status
      </Link>
      <Link to="/history" className="btn btn-primary btn-nav-home fw-bold fs-4 pt-3">
        History
      </Link>
    </div>
  )
}

export default ButtonNavHome