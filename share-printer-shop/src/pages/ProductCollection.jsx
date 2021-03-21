import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'

function ProductCollection () {
  const [shoper, setShoper] = useState({})

  useEffect(() => {
    axios({
      url: 'http://localhost:3002/shop/detail',
      method: 'GET',
      headers: {access_token: localStorage.getItem('access_token')}
    })
      .then(({data}) => {
        setShoper(data.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  
  const deleteProduct = (value) => {
    axios({
      url: 'http://localhost:3002/shop/detail/' + shoper.id,
      method: 'DELETE',
      headers: {access_token: localStorage.getItem('access_token')},
      data: {products_uuid: value}
    })
      .then(({data}) => {
        setShoper(data.data)
      })
      .catch(err => {
        console.log(err)
      })
  }

  const editProduct = () => {
    
  }

  return (
    <div id="table-container" className="shadow p-5">
      <h4 className="text-center mb-5 fw-bold">Share P Product List</h4>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">ProductId</th>
            <th scope="col">Product Name</th>
            <th scope="col">Price</th>
            <th scope="col">Description</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {
            shoper.products?.map(product => {
              let key = Object.keys(product)[0]
              return (
                <tr key={key}>
                  <th scope="row">1</th>
                  <td>{product[key].display_name}</td>
                  <td>{product[key].price}</td>
                  <td className="">{product[key].description}</td>
                  <td>
                    <div className="d-flex gap-2 justify-content-center">
                      <button className="btn btn-primary" onClick={editProduct}><i className="material-icons">edit</i></button> 
                      <button className="btn btn-danger" onClick={() => deleteProduct(key)}><i className="material-icons">delete</i></button>  
                    </div>
                  </td>
                </tr>
              )
            })
          }
          {/* <tr>
            <th scope="row">1</th>
            <td>Print - A4</td>
            <td>500</td>
            <td className="">Print A3 kualitas super Black & White</td>
            <td>
              <div className="d-flex gap-2 justify-content-center">
                <button className="btn btn-primary"><i className="material-icons">edit</i></button> 
                <button className="btn btn-danger"><i className="material-icons">delete</i></button>  
              </div>
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Print Warna A4</td>
            <td>1000</td>
            <td className="">Print A4 warna kualitas super</td>
            <td>
              <div className="d-flex gap-2 justify-content-center">
                <button className="btn btn-primary"><i className="material-icons">edit</i></button> 
                <button className="btn btn-danger"><i className="material-icons">delete</i></button>  
              </div>
            </td>
          </tr>
          <tr>
          <th scope="row">3</th>
            <td>Print Warna A3</td>
            <td>1000</td>
            <td className="">Print Warna A3 kualitas super</td>
            <td>
              <div className="d-flex gap-2 justify-content-center">
                <button className="btn btn-primary"><i className="material-icons">edit</i></button> 
                <button className="btn btn-danger"><i className="material-icons">delete</i></button> 
              </div>
            </td>
          </tr> */}
        </tbody>
      </table>
    </div>
  )
}

export default ProductCollection