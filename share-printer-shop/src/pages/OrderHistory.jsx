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
            <th scope="col">PRODUCT NAME</th>
            <th scope="col">COPY</th>
            <th scope="col">PRICE</th>
            <th scope="col">TOTAL</th>
            <th scope="col">DESCRIPTION</th>
            <th scope="col">STATUS ORDER</th>
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
    </div>
  )
}

export default OrderHistory