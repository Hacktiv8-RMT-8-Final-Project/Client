import React, { useEffect, useState } from 'react'
import './orderHistory.css'
import axios from 'axios'
import {Link} from 'react-router-dom'

function OrderHistory () {
  const [history, setHistory] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios({
      url: 'http://localhost:3002/shop/transaction_history',
      method: 'GET',
      headers: {access_token: localStorage.getItem('access_token')}
    })
      .then(({data}) => {
        console.log(data.data)
        setHistory(data.data)
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
      <h4 className="text-center mb-5 fw-bold">Share P Product List</h4>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">No.</th>
            <th scope="col">Customer</th>
            <th scope="col">Product Name</th>
            <th scope="col">Copy</th>
            <th scope="col">Price</th>
            <th scope="col">Total</th>
            <th scope="col">Description</th>
            <th scope="col">Status Order</th>
          </tr>
        </thead>
        <tbody>
        {   loading ? <tr><td>Loading</td></tr> :
            history.map((data, i) => {
              return (
                <tr key={data.id}>
                  <th scope="row">{i + 1}</th>
                  <td>{data.email_user}</td>
                  <td>{data.order_content.data}</td>
                  <td>4</td>
                  <td>{data.order_price}</td>
                  <td>2000</td>
                  <td className="">Print A3 kualitas super Black & White</td>
                  {
                    data.payment_status === 1 ?
                      <td>Order Requested</td> :
                    data.payment_status === 2 ?
                      <td>Paid</td> :
                    data.payment_status === 3 ?
                      <td>Confirm</td> :
                    data.payment_status === 4 ?
                      <td>On Progress</td> :
                    data.payment_status === 5 ?
                      <td>Completed</td> :
                      <td>Canceled</td>
                  }
                </tr>
              )
            })
          }
         
        </tbody>
      </table>
    </div>
  )
}

export default OrderHistory