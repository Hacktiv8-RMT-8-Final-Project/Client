import React from 'react'

function PrintForm () {
  return (
    <div className="d-flex flex-column justify-content-center " id="container-form-printing">
      <div id="header-form-print">
        <h1 className="text-color">Print Form</h1>
      </div>
      <form id="print-form" className="shadow mb-5">
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Ukuran Kertas</label>
          <select name="" id="" className="form-control">
            <option value="">
              Pilih Ukuran Kertas
            </option>
            <option value="">
              Letter
            </option>
            <option value="">
              Legal
            </option>
            <option value="">
              A5
            </option>
            <option value="">
              A4
            </option>
            <option value="">
              F4
            </option>
          </select>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Berat Kertas</label>
          <select name="" id="" className="form-control">
            <option value="">
              Pilih Berat Kertas
            </option>
            <option value="">
              70-80 gsm
            </option>
            <option value="">
              100-150 gsm
            </option>
            <option value="">
              190-260 gsm
            </option>
            <option value="">
              270-310 gsm
            </option>
          </select>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Warna</label>
          <select name="" id="" className="form-control">
            <option value="">
              Pilih Warna
            </option>
            <option value="">
              Color
            </option>
            <option value="">
              Black White
            </option>
          </select>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Jilid</label>
          <select name="" id="" className="form-control">
            <option value="">
              Pilih Option
            </option>
            <option value="">
              Jilid
            </option>
            <option value="">
              Not
            </option>
          </select>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Copy</label>
          <input type="number" class="form-control" id="exampleInputPassword1"/>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Orientation</label>
          <select name="" id="test" className="form-control" >
            <option value="">
              Pilih Option
            </option>
            <option value="">
              Potrait
            </option>
            <option value="">
              Lanscape
            </option>
          </select>
        </div>
        <div class="mb-3">
          <label for="myfile">Select a file:</label>
          <input type="file" id="myfile" name="myfile" className="form-control"/>
        </div>
        <div className="d-flex gap-2 justify-content-center">
          <button type="submit" class="btn btn-primary rounded-pill" id="btn-submit">Submit</button>
          <button type="submit" class="btn btn-danger">Cancel</button>
        </div>
      </form>
    </div>
  ) 
}

export default PrintForm