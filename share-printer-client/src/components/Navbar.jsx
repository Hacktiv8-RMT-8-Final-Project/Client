import {NavLink} from 'react-router-dom'

function Navbar(){
  return (
    <nav className="navbar navbar-expand navbar-light bg-light">
      <div className="container-fluid">
        {/* <i className="material-icons fs-5">print</i> */}
        {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button> */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/loginUser">Login</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/registerUser">Register</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}


export default Navbar