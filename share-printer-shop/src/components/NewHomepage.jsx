import React from 'react'
import './newHomepage.css'
import {NavLink} from 'react-router-dom'

function NewHomepage () {
  return (
    <div id="table-container" className="shadow p-5">
      <h4 className="text-center mb-5 fw-bold">Share P Order List</h4>
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">OrderId</th>
            <th scope="col">Customer</th>
            <th scope="col">Service</th>
            <th scope="col">status</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            {
              
            }
            <td className="fst-italic">pending</td>
            <td>
              <div className="d-flex gap-2 justify-content-center">
                <NavLink to="/details" className="btn btn-warning">Detail</NavLink> 
              </div>
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td className="fst-italic">pending</td>
            <td>
              <div className="d-flex gap-2 justify-content-center">
                <NavLink to="/details" className="btn btn-warning ">Detail</NavLink> 
              </div>
            </td>
          </tr>
          <tr>
          <th scope="row">3</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td className="fst-italic">pending</td>
            <td>
              <div className="d-flex gap-2 justify-content-center">
                <NavLink to="/details" className="btn btn-warning ">Detail</NavLink> 
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default NewHomepage