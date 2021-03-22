import React, { useEffect, useState } from 'react'
import './newHomepage.css'
import contohBuktiBayar from '../assets/BuktiBayar.png'
import axios from 'axios'
const baseUrl = 'http://localhost:3002/'

function NewHomepage () {

  const [orders, setOrders] = useState([])

  useEffect(() => {
    axios({
      url: baseUrl + 'shop/order_lists',
      method: 'GET',
      headers: {access_token: localStorage.getItem('access_token')}
    })
      .then(({data}) => {
        setOrders(data.data)
        console.log(data.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])
  return (
    <div id="table-container" className="shadow p-5">
      <h4 className="text-center mb-5 fw-bold">Share P Order List</h4>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">No. </th>
            <th scope="col">Customer</th>
            <th scope="col">Service</th>
            <th scope="col">status</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {
            orders?.map(order => {
              let detail = `#detail-${order.id}`
              let detailModal = `detail-${order.id}`
              let payment = `#payment-${order.id}`
              let paymentModal = `payment-${order.id}`
              return (
                  <tr key={order.id}>
                    <th scope="row">3</th>
                    <td>{order.email_user}</td>
                    <td>{order.order_content}</td>
                    <td className="fst-italic">pending</td>
                    <td>
                      <div className="d-flex gap-2 justify-content-center">
                        <button type="button" className="btn btn-warning" data-bs-toggle="modal" data-bs-target={detail}>
                          Details
                        </button>

                        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target={payment}>
                          Payment
                        </button>
                      </div>
                    </td>

                  {/* Detail Modal */}
                    <td>
                      <div className="modal fade" id={detailModal} tabIndex="-1" aria-labelledby="detailsLabel" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5 className="modal-title" id="detailsLabel">Print Warna A3</h5>
                              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                              <div className="mb-3">
                                <p>Copy:</p>
                                <p className="fw-bold">{order.order_content}</p>
                              </div>
                              <div className="mb-5">
                                <p className="fw-bold">Notes:</p>
                                <p>Print Warna A4 terbaik</p>
                              </div>
                              <hr/>
                              <div className="mb-3">
                                <p>Total Price:</p>
                                <p className="fw-bold">{order.order_price}</p>
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

                      {/* Payment Modal */}
                      <div className="modal fade" id={paymentModal} tabIndex="-1" aria-labelledby="paymentLabel" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered  modal-lg">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5 className="modal-title" id="paymentLabel">Order Receipt</h5>
                              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                              <img src={contohBuktiBayar} alt="contohBuktiBayar" id="bukti-bayar" className="mx-5"/>
                            </div>
                            <div className="modal-footer">
                              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                              <button type="button" className="btn btn-primary">Accept</button>
                              <button type="button" className="btn btn-danger">Reject</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default NewHomepage