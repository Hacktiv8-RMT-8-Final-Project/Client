import React from 'react'
import '../styles/style.css'

function NewAddProduct () {
  return (
    <div className="d-flex flex-column mb-5 mt-5" id="form-container">
      <div id="form-heading">
        <h3 className="text-center">Add Product</h3>
      </div>
      <form id="form-add-product" className="shadow">
        <div className="mb-3">
          <label for="exampleInputEmail1" class="form-label">Product Name:</label>
          <input type="text"
           className="form-control"
           name="display_name"/>
        </div>

        <div className="mb-3">
          <label for="exampleInputEmail1" class="form-label">Price</label>
          <input type="text"
           className="form-control"
           name="Price"/>
        </div>

        <div className="mb-5">
          <label for="exampleInputEmail1" class="form-label">Description</label>
          <textarea 
          name="description" 
          id="" cols="30" 
          rows="5" 
          className="form-control"
          ></textarea>
        </div>
        <div className="d-flex justify-content-center gap-3">
          <button type="submit" className="btn btn-primary fw-bold rounded-pill" id="btn-submit">Submit</button>
          <button type="submit" className="btn btn-danger fw-bold rounded-pill" id="btn-submit">Cancel</button>
        </div>
      </form>
    </div>
  ) 
}

export default NewAddProduct