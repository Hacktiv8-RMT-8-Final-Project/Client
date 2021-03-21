import React from 'react'
import './orderHistory.css'

function OrderHistory () {
  return (
    <div id="table-container-history" className="shadow p-5">
      <h4 className="text-center mb-5 fw-bold">Share P Product List</h4>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">HistoryId</th>
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
          <tr>
            <th scope="row">1</th>
            <td>Popo</td>
            <td>Print - A4</td>
            <td>4</td>
            <td>500</td>
            <td>2000</td>
            <td className="">Print A3 kualitas super Black & White</td>
            <td>Success</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default OrderHistory