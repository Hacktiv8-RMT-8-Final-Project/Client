import React from 'react'
import '../styles/style.css'

function FormColorOption () {
  return (
    <div className="mb-5" id="form-container">
      <div id="form-heading">
        <h3 className="text-center">Color Option</h3>
      </div>
    <form id="form-add-product" className="shadow ">
      <h6>Full Colorr</h6>
      <label htmlFor="exampleInputEmail1" className="form-label">Letter</label>
      <div className="mb-3 d-flex justify-conten-center gap-2">
        <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="price"/>
        <textarea placeholder="description" className="form-control" id="" cols="30" rows="1"></textarea>
      </div>
      
      <label htmlFor="exampleInputEmail1" className="form-label">Legal</label>
      <div className="mb-3 d-flex justify-conten-center gap-2">
        <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="price"/>
        <textarea placeholder="description" className="form-control" id="" cols="30" rows="1"></textarea>
      </div>

      <label htmlFor="exampleInputEmail1" className="form-label">A5</label>
      <div className="mb-3 d-flex justify-conten-center gap-2">
        <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="price"/>
        <textarea placeholder="description" className="form-control" id="" cols="30" rows="1"></textarea>
      </div>

      <label htmlFor="exampleInputEmail1" className="form-label">A4</label>
      <div className="mb-3 d-flex justify-conten-center gap-2">
        <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="price"/>
        <textarea placeholder="description" className="form-control" id="" cols="30" rows="1"></textarea>
      </div>

      <label htmlFor="exampleInputEmail1" className="form-label">F4</label>
      <div className="mb-3 d-flex justify-conten-center gap-2">
        <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="price"/>
        <textarea placeholder="description" className="form-control" id="" cols="30" rows="1"></textarea>
      </div>

      <h6>Black and White</h6>
      <label htmlFor="exampleInputEmail1" className="form-label">Letter</label>
      <div className="mb-3 d-flex justify-conten-center gap-2">
        <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="price"/>
        <textarea placeholder="description" className="form-control" id="" cols="30" rows="1"></textarea>
      </div>
      
      <label htmlFor="exampleInputEmail1" className="form-label">Legal</label>
      <div className="mb-3 d-flex justify-conten-center gap-2">
        <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="price"/>
        <textarea placeholder="description" className="form-control" id="" cols="30" rows="1"></textarea>
      </div>

      <label htmlFor="exampleInputEmail1" className="form-label">A5</label>
      <div className="mb-3 d-flex justify-conten-center gap-2">
        <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="price"/>
        <textarea placeholder="description" className="form-control" id="" cols="30" rows="1"></textarea>
      </div>

      <label htmlFor="exampleInputEmail1" className="form-label">A4</label>
      <div className="mb-3 d-flex justify-conten-center gap-2">
        <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="price"/>
        <textarea placeholder="description" className="form-control" id="" cols="30" rows="1"></textarea>
      </div>

      <label htmlFor="exampleInputEmail1" className="form-label">F4</label>
      <div className="mb-3 d-flex justify-conten-center gap-2">
        <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="price"/>
        <textarea placeholder="description" className="form-control" id="" cols="30" rows="1"></textarea>
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  </div>
  ) 
}

export default FormColorOption