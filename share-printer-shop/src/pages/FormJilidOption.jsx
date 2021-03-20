import React from 'react'
import '../styles/style.css'

function FormJilid () {
  return (
    <div className="mb-5" id="form-container">
      <div id="form-heading">
        <h3 className="text-center">Jilid Option</h3>
      </div>
    <form id="form-add-product" className="shadow">
      <h6>Hard Cover</h6>
      <label for="exampleInputEmail1" class="form-label">Letter</label>
      <div class="mb-3 d-flex justify-conten-center gap-2">
        <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="price"/>
        <textarea placeholder="description" className="form-control" id="" cols="30" rows="1"></textarea>
      </div>
      
      <label for="exampleInputEmail1" class="form-label">Legal</label>
      <div class="mb-3 d-flex justify-conten-center gap-2">
        <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="price"/>
        <textarea placeholder="description" className="form-control" id="" cols="30" rows="1"></textarea>
      </div>

      <label for="exampleInputEmail1" class="form-label">A5</label>
      <div class="mb-3 d-flex justify-conten-center gap-2">
        <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="price"/>
        <textarea placeholder="description" className="form-control" id="" cols="30" rows="1"></textarea>
      </div>

      <label for="exampleInputEmail1" class="form-label">A4</label>
      <div class="mb-3 d-flex justify-conten-center gap-2">
        <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="price"/>
        <textarea placeholder="description" className="form-control" id="" cols="30" rows="1"></textarea>
      </div>

      <label for="exampleInputEmail1" class="form-label">F4</label>
      <div class="mb-3 d-flex justify-conten-center gap-2">
        <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="price"/>
        <textarea placeholder="description" className="form-control" id="" cols="30" rows="1"></textarea>
      </div>

      <h6>Soft Cover</h6>
      <label for="exampleInputEmail1" class="form-label">Letter</label>
      <div class="mb-3 d-flex justify-conten-center gap-2">
        <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="price"/>
        <textarea placeholder="description" className="form-control" id="" cols="30" rows="1"></textarea>
      </div>
      
      <label for="exampleInputEmail1" class="form-label">Legal</label>
      <div class="mb-3 d-flex justify-conten-center gap-2">
        <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="price"/>
        <textarea placeholder="description" className="form-control" id="" cols="30" rows="1"></textarea>
      </div>

      <label for="exampleInputEmail1" class="form-label">A5</label>
      <div class="mb-3 d-flex justify-conten-center gap-2">
        <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="price"/>
        <textarea placeholder="description" className="form-control" id="" cols="30" rows="1"></textarea>
      </div>

      <label for="exampleInputEmail1" class="form-label">A4</label>
      <div class="mb-3 d-flex justify-conten-center gap-2">
        <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="price"/>
        <textarea placeholder="description" className="form-control" id="" cols="30" rows="1"></textarea>
      </div>

      <label for="exampleInputEmail1" class="form-label">F4</label>
      <div class="mb-3 d-flex justify-conten-center gap-2">
        <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="price"/>
        <textarea placeholder="description" className="form-control" id="" cols="30" rows="1"></textarea>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
  )
}

export default FormJilid