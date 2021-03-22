import React, { useEffect, useState } from 'react'
import './newHomepage.css'
import contohBuktiBayar from '../assets/BuktiBayar.png'
import axios from 'axios'
import { useHistory } from 'react-router'
import { NavLink } from 'react-router-dom'
const baseUrl = 'http://localhost:3002/'

function NewHomepage () {
  const history = useHistory()
  const [orders, setOrders] = useState([])

  useEffect(() => {
    axios({
      url: baseUrl + 'shop/order_lists',
      method: 'GET',
      headers: {access_token: localStorage.getItem('access_token')}
    })
      .then(({data}) => {
        setOrders(data.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [orders])

  function downloadFile (link) {
    window.location.href = link
  }

  function updateStatus (id, status) {
    axios({
      url: `http://localhost:3002/shop/order_lists/${id}`,
      method: 'PATCH',
      headers: {access_token: localStorage.getItem('access_token')},
      data: {
        payment_status: status
      }
    })
      .then(data => {
        console.log(data)
      })
      .catch(err => {
        console.log(err)
      })
      history.push('/')
  }

  console.log(orders)
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
            orders?.map((order, i) => {
              let detail = `#detail-${order.id}`
              let detailModal = `detail-${order.id}`
              let payment = `#payment-${order.id}`
              let paymentModal = `payment-${order.id}`
              return (
                  <tr key={order.id}>
                    <th scope="row">{i + 1}</th>
                    <td>{order.email_user}</td>
                    <td>{order.order_content.data}</td>
                    {
                      order.payment_status === 1 ?
                        <td  className="fst-italic"><p id="order-requesteds">Order Requested</p></td> :
                      order.payment_status === 2 ?
                        <td  className="fst-italic"><p id="paids">Paid</p></td> :
                      order.payment_status === 3 ?
                        <td  className="fst-italic"><p id="confirms">Confirm</p> </td> :
                      order.payment_status === 4 ?
                        <td  className="fst-italic"><p id="on-progresss">On Progress</p></td> :
                      order.payment_status === 5 ?
                        <td  className="fst-italic"><p id="completeds">Completed</p></td> :
                        <td  className="fst-italic"><p id="canceleds">Canceled</p></td>
                    }
                    <td>
                      <div className="d-flex gap-2 justify-content-center">
                        <button type="button" className="btn btn-warning" data-bs-toggle="modal" data-bs-target={detail}>
                          Details
                        </button>

                        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target={payment}>
                          Payment
                        </button>

                        {/* <NavLink to={`${order.proof_receipt_transaction}`} type="button" className="btn btn-success">
                          Download File
                        </NavLink> */}

                        <button type="button" className="btn btn-success" onClick={()=> downloadFile(order.proof_receipt_transaction)}>
                          Download File
                        </button>
                      </div>
                    </td>

                    {/* Details modal */}
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
                                <p>Order Number:</p>
                                <p className="fw-bold">{order.order_number}</p>
                              </div>
                              <div className="mb-3">
                                <p>Customer:</p>
                                <p className="fw-bold">{order.email_user}</p>
                              </div>
                              <div className="mb-3">
                                <p >Order Details:</p>
                                <p className="fw-bold">{order.order_content.data}</p>
                              </div>
                              <div className="d-flex gap-5">
                                <div className="mb-3">
                                  <p>Amount:</p>
                                  <p className="fw-bold">5</p>
                                </div>
                                <div className="mb-3">
                                  <p>Price per sheet:</p>
                                  <p className="fw-bold">{order.order_price}</p>
                                </div>
                              </div>
                              <hr/>
                              <div className="mb-3">
                                <p>Total Price:</p>
                                <p className="fw-bold">{order.order_price}</p>
                              </div>
                              <hr/>
                              <div className=" d-flex gap-3">
                                <p >Status:</p>
                                {
                                  order.payment_status === 1 ?
                                    <td  className="fw-bold"><p id="order-requested">Order Requested</p></td> :
                                  order.payment_status === 2 ?
                                    <td  className="fw-bold"><p id="paid">Paid</p></td> :
                                  order.payment_status === 3 ?
                                    <td  className="fw-bold"><p id="confirm">Confirm</p> </td> :
                                  order.payment_status === 4 ?
                                    <td  className="fw-bold"><p id="on-progress">On Progress</p></td> :
                                  order.payment_status === 5 ?
                                    <td  className="fw-bold"><p id="completed">Completed</p></td> :
                                    <td  className="fw-bold"><p id="canceled">Canceled</p></td>
                                }
                              </div>
                            </div>
                            {
                              order.payment_status === 6 ?
                              <div className="modal-footer">
                                <button type="button" className="btn btn-warning" data-bs-dismiss="modal" disabled onClick={() => updateStatus(order.id, 4)}>On Progress</button>
                                <button type="button" className="btn btn-success" data-bs-dismiss="modal" disabled onClick={() => updateStatus(order.id, 5)}>Done</button>
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                              </div> :
                              order.payment_status === 4 ?
                              <div className="modal-footer">
                                <button type="button" className="btn btn-warning" data-bs-dismiss="modal" disabled onClick={() => updateStatus(order.id, 4)}>On Progress</button>
                                <button type="button" className="btn btn-success" data-bs-dismiss="modal" onClick={() => updateStatus(order.id, 5)}>Done</button>
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                              </div> :
                              <div className="modal-footer">
                                <button type="button" className="btn btn-warning" data-bs-dismiss="modal" onClick={() => updateStatus(order.id, 4)}>On Progress</button>
                                <button type="button" className="btn btn-success" data-bs-dismiss="modal" onClick={() => updateStatus(order.id, 5)}>Done</button>
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                              </div>
                            }
                          </div>
                        </div>
                      </div>

                      {/* payment Modal */}
                      <div className="modal fade" id={paymentModal} tabIndex="-1" aria-labelledby="paymentLabel" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered  modal-lg">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5 className="modal-title" id="paymentLabel">Order Receipt</h5>
                              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                              <img src={`${order.proof_receipt_transaction}`} alt="contohBuktiBayar" id="bukti-bayar" className="mx-5"/>
                            </div>
                            <div className="modal-footer">
                              {
                                order.payment_status === 3 || order.payment_status === 6  ?
                                <div className="d-flex gap-2">
                                  <button type="button" className="btn btn-primary" data-bs-dismiss="modal" disabled onClick={() => updateStatus(order.id, 3)}>Accept</button>
                                  <button type="button" className="btn btn-danger" data-bs-dismiss="modal" disabled onClick={() => updateStatus(order.id, 6)}>Reject</button>
                                </div> :
                                <div className="d-flex gap-2">
                                  <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={() => updateStatus(order.id, 3)}>Accept</button>
                                  <button type="button" className="btn btn-danger" data-bs-dismiss="modal"  onClick={() => updateStatus(order.id, 6)}>Reject</button>
                                </div>
                              }
                              <button type="button" className="btn btn-secondary"  data-bs-dismiss="modal">Close</button>
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