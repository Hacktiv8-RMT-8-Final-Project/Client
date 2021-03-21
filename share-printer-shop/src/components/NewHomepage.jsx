import React from 'react'
import './newHomepage.css'
import contohBuktiBayar from '../assets/BuktiBayar.png'

function NewHomepage () {
  return (
    <div id="table-container" className="shadow p-5">
      <h4 className="text-center mb-5 fw-bold">Share P Order List</h4>
      <table className="table table-hover">
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
            <td className="fst-italic">pending</td>
            <td>
              <div className="d-flex gap-2 justify-content-center">
                <button type="button" className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#details">
                  Details
                </button> 
                <button type="button" className="btn btn-primary">
                  Payment
                </button>
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
                <button type="button" className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#details">
                  Details
                </button> 
                <button type="button" className="btn btn-primary">
                  Payment
                </button>
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
                <button type="button" className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#details">
                  Details
                </button>

                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#payment">
                  Payment
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      <div className="modal fade" id="details" tabindex="-1" aria-labelledby="detailsLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="detailsLabel">Print Warna A3</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <p>Copy:</p>
                <p className="fw-bold">4</p>
              </div>
              <div className="mb-5">
                <p className="fw-bold">Notes:</p>
                <p>Print Warna A4 terbaik</p>
              </div>
              <hr/>
              <div className="mb-3">
                <p>Total Price:</p>
                <p className="fw-bold">Rp. 40.000</p>
              </div>
              <hr/>
              <div className=" d-flex gap-3">
                <p className="fw-bold">Status:</p>
                <p>Pending</p>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-warning">OnProgress</button>
              <button type="button" className="btn btn-success">Done</button>
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>

      <div class="modal fade" id="payment" tabindex="-1" aria-labelledby="paymentLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered  modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="paymentLabel">Order Receipt</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <img src={contohBuktiBayar} alt="contohBuktiBayar" id="bukti-bayar" className="mx-5"/>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Accept</button>
              <button type="button" class="btn btn-danger">Reject</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewHomepage