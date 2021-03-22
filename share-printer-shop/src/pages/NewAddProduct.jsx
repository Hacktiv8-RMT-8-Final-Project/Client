import React, { useEffect, useState } from 'react'
import '../styles/style.css'
import { v4 as uuidv4 } from 'uuid'
import axios from 'axios'
import { useHistory } from 'react-router'
import {baseUrl} from '../baseUrl'

function NewAddProduct () {
  const [input, setInput] = useState({
    display_name: '',
    price: 0,
    description: ''
  })

  const history = useHistory()

  const [shoper, setShoper] = useState({})

  const onChangeHandler = ({target}) => {
    const {value, name} = target
    setInput({...input, [name]: value})
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
  
  const submitProduct = async (e) => {
    e.preventDefault()
    const uuid = uuidv4()
    let newProduct = {}
    newProduct[uuid] = input
    let products
    if(Object.keys(shoper).length && shoper.products.length){
      products = [...shoper.products, newProduct]
    } else {
      products = [newProduct]
    }
    const updateShop = {...shoper, products}
    await axios({
      url: `${baseUrl}shop/detail/${shoper.id}`,
      method: 'PUT',
      headers: {access_token: localStorage.getItem('access_token')},
      data: updateShop
    })

    history.push('/productCollection')
  }


  return (
    <div className="d-flex flex-column mb-5 mt-5" id="form-container">
      <div id="form-heading">
        <h3 className="text-center">Add Product</h3>
      </div>
      <form id="form-add-product" className="shadow" onSubmit={submitProduct} >
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Product Name:</label>
          <input type="text"
           className="form-control"
           name="display_name"
           placeholder='Product Name'
           onChange={onChangeHandler}
           />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Price</label>
          <input type="number"
           className="form-control"
           name="price"
           placeholder="2000"
           onChange={onChangeHandler}
           />
        </div>

        <div className="mb-5">
          <label htmlFor="exampleInputEmail1" className="form-label">Description</label>
          <textarea 
          name="description" 
          id="" cols="30" 
          rows="5" 
          className="form-control"
          placeholder="Description"
          onChange={onChangeHandler}
          ></textarea>
        </div>
        <div className="d-flex justify-content-center gap-3">
          <button type="submit" className="btn btn-primary fw-bold rounded-pill" id="btn-submit">Submit</button>
        </div>
      </form>
    </div>
  ) 
}

export default NewAddProduct