import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import {baseUrl} from '../baseUrl'

function ProductCollection () {
  const history = useHistory()
  const [shoper, setShoper] = useState([])
  const [dataProduct, setDataProduct] = useState ({
    display_name: '',
    price: '',
    description: ''
  })

  const onChangeHandler = ({target}) => {
    const {value, name} = target
    setDataProduct({...dataProduct, [name]: value})
  }

  useEffect(() => {
    axios({
      url: baseUrl + 'shop/detail',
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

  console.log(shoper)
  
  const deleteProduct = (value) => {
    axios({
      url: baseUrl + 'shop/detail/' + shoper.id,
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

  const editProduct = async (e) => {
    console.log('masuk')
    e.preventDefault()
    const updateShop = {...shoper}
  
    updateShop.products.forEach((product)=> {
      let key = Object.keys(product)[0]
      if(key === dataProduct.id) {
        delete dataProduct.id
        product[key] = dataProduct
      } 
    })

    let {data} = await axios({
      url: `${baseUrl}shop/detail/${shoper.id}`,
      method: 'PUT',
      headers: {access_token: localStorage.getItem('access_token')},
      data: updateShop
    })

    setShoper(data.data)
    history.push('/productCollection')
  }

  const getIdProduct = (id) => {
    const product = shoper.products.filter(product => {
      var key = Object.keys(product)[0]
      return key === id
    })
    const idProduct = {...product[0][id], id}
    setDataProduct(idProduct)
  }

  return (
    <div id="table-container" className="shadow p-5">
      <h4 className="text-center mb-5 fw-bold">Share P Product List</h4>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">No. </th>
            <th scope="col">Product Name</th>
            <th scope="col">Price</th>
            <th scope="col">Description</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {
            shoper.products?.map((product, index) => {
              let key = Object.keys(product)[0]
              return (
                <tr key={key}>
                  <th scope="row">{index + 1}</th>
                  <td>{product[key].display_name}</td>
                  <td>{product[key].price}</td>
                  <td className="">{product[key].description}</td>
                  <td>
                    <div className="d-flex gap-2 justify-content-center">
                      <button className="btn btn-primary"><i className="material-icons" data-bs-toggle="modal" data-bs-target="#edit" onClick={()=> getIdProduct(key) }>edit</i></button> 
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


      <div className="modal fade" id="edit" tabIndex="-1" aria-labelledby="editLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered  modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="editLabel">Edit Product</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
            <form id="" className="" >
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">Product Name:</label>
                  <input type="text"
                   className="form-control"
                   name="display_name"
                   onChange={onChangeHandler}
                   value={dataProduct.display_name}
                   />
                </div>

                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">Price</label>
                  <input type="text"
                   className="form-control"
                   name="price"
                   onChange={onChangeHandler}
                   value={dataProduct.price}
                   />
                </div>

                <div className="mb-5">
                  <label htmlFor="exampleInputEmail1" className="form-label">Description</label>
                  <textarea 
                  name="description" 
                  id="" cols="30" 
                  rows="5" 
                  className="form-control"
                  onChange={onChangeHandler}
                  value={dataProduct.description}
                  ></textarea>
                </div>
                <div className="d-flex justify-content-center gap-3">
                  <button type="button" className="btn btn-primary fw-bold rounded-pill" id="btn-submit" data-bs-dismiss="modal" onClick={editProduct}>Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCollection