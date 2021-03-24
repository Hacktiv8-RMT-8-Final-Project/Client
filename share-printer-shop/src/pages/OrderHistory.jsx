import React, { useEffect, useState } from 'react'
import './orderHistory.css'
import axios from 'axios'
import {baseUrl} from '../baseUrl'

function OrderHistory () {
  const [history, setHistory] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios({
      url: baseUrl + 'shop/transaction_history',
      method: 'GET',
      headers: {access_token: localStorage.getItem('access_token')}
    })
      .then(({data}) => {
        console.log(data.data)
        setHistory(data.data)
        console.log(data.data)
      })
      .catch(err => {
        console.log(err)
      })
      .finally(()=>{
        setLoading(false)
      })
  }, [])

  return (
    <div id="table-container-history" className="shadow p-5">
      <h4 className="text-center mb-5 fw-bold">SHARE PRINTER ORDER HISTORY</h4>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">No.</th>
            <th scope="col">CUSTOMER</th>
            <th scope="col">SERVICE</th>
            <th scope="col">REVENUE</th>
            <th scope="col">DETAILS</th>
            <th scope="col">STATUS</th>
          </tr>
        </thead>
        <tbody>
        {   loading ? <tr><td>Loading</td></tr> :
            history.map((data, i) => {
              let detail = `#detail-${data.id}`
              // let detailModal = `detail-${order.id}`
              return (
                <tr key={data.id}>
                  <th scope="row">{i + 1}</th>
                  <td>{data.email_user}</td>
                  <td>Print Document</td>
                  <td>{`Rp. ${data.order_price.toLocaleString('id')},00`}</td>
                  <td><button type="button" className="btn btn-outline-warning fw-bold" data-bs-toggle="modal" data-bs-target={detail} disabled={data.payment_status === 6}>
                      Details
                    </button></td>
                  {
                    data.payment_status === 5 ?
                      <td> <p id="history-status-done">DONE</p> </td> :
                      <td> <p id="histroy-status-canceled">CANCELED</p></td>
                  }
                </tr>
              )
            })
          }
        </tbody>
      </table>


      {
        history.map(order => {
          let detailModal = `detail-${order.id}`
          return (
            <div key={order.id}>
              <div className="modal fade" id={detailModal} tabIndex="-1" aria-labelledby="detailsLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="detailsLabel">Order Lists</h5>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                      <div className="mb-3">
                        <p>Order Number:</p>
                        <p className="fw-bold text-details">{order.order_number}</p>
                      </div>
                      <div className="mb-3">
                        <p>Customer:</p>
                        <p className="fw-bold text-details">{order.email_user}</p>
                      </div>
                      <div className="">
                        <p >Order Details:</p>
                        <hr/>
                      {
                        order.order_content.map((el, i) => {
                          let key = Object.keys(el)[0]
                          return(
                            <div key={el.id}>
                              <p className="fw-bold">{i + 1}. {el[key].display_name}</p>
                              <div className="d-flex gap-5 ms-3">
                                <div className="mb-3">
                                  <p>Copy:</p>
                                  <p className=" text-details">{el[key].amount}</p>
                                </div>
                                <div className="mb-3">
                                  <p>Price:</p>
                                  <p className=" text-details">{`Rp. ${el[key].price.toLocaleString('id')},00`}</p>
                                </div>
                                <div className="mb-3">
                                  <p>Description:</p>
                                  <p className=" text-details">{el[key].description}</p>
                                </div>
                              </div>
                            </div>
                          )
                        })
                      }
                      </div>
                      <hr/>
                      <div className="mb-3">
                        <p>Total Price:</p>
                        <p className="fw-bold fs-3">{`Rp. ${order.order_price.toLocaleString('id')},00`}</p>
                      </div>
                      <hr/>
                      <div className=" d-flex gap-3">
                        <p >Status:</p>
                        <div  className="fw-bold"><p id="completed">Completed</p></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default OrderHistory