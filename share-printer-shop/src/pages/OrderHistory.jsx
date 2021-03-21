import React, { useEffect, useState } from 'react'
import './orderHistory.css'
import axios from 'axios'


function OrderHistory () {
  const [history, setHistory] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios({
      url: 'http://localhost:3000/shop/transaction_history',
      method: 'GET',
      headers: {access_token: localStorage.getItem('access_token')}
    })
      .then(({data}) => {
        setHistory(data)
        console.log(data)
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
            <th scope="col">copy</th>
            <th scope="col">Price</th>
            <th scope="col">Total</th>
            <th scope="col">Description</th>
            <th scope="col">Status Order</th>
          </tr>
        </thead>
        <tbody>
        {/* {   loading ? <div>Loading</div> :
            history.data.map(data => {
              <tr>
                <th scope="row">{data.data.id}</th>
                <td>Popo</td>
                <td>Print - A4</td>
                <td>4</td>
                <td>500</td>
                <td>2000</td>
                <td className="">Print A3 kualitas super Black & White</td>
                <td>Success</td>
              </tr>
            })
          } */}
         
        </tbody>
      </table>
    </div>
  )
}

export default OrderHistory