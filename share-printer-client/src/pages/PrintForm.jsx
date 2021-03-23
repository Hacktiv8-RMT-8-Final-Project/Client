import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Map from '../components/Map'

function PrintForm () {
  const [input, setInput] = useState({
    // Ntar Dulu
  })
  const [shoper, setShoper] = useState(null)
  const [currentCoordinate, setCurrentCoordinate] = useState({})
  const [shopers, setShopers] = useState([])
  const [isDisplay, setIsDisplay] = useState(false)

  const submitPrint = (e) => {
    e.preventDefault()
    console.log('')
  }

  useEffect(() => {
    axios.get('http://localhost:3002/shop')
      .then(({data}) => {
        setShopers(data)
      })
  }, [])

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position => {
        const currentCoordinate = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        }

        setCurrentCoordinate(currentCoordinate)
      }));
    }
  })

  const setLocate = (value) => {
    setShoper(value)
  }

  const markerMap = () => {
    setIsDisplay(false)
    setShoper({})
    let marker = shopers.map((shop) => {
      if(typeof shop.location === 'string'){
        let lat = shop.location.split('lat: ').slice(1).join('').split(', ')[0]
        let lng = shop.location.split('lng: ').slice(1).join('').split('}')[0]
        shop.location = {lat, lng}
      }
      return shop
    })

    setShopers(marker)
  }

  const submitMap = () => {
    setIsDisplay(true)
  }

  return (
    <div className="d-flex flex-column justify-content-center " id="container-form-printing">
      <div id="header-form-print">
        <h1 className="text-color">Print Form</h1>
      </div>
      <form id="print-form" className="shadow mb-5" onSubmit={submitPrint}>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Ukuran Kertas</label>
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
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Berat Kertas</label>
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
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Warna</label>
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
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Jilid</label>
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
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Copy</label>
          <input type="number" className="form-control" id="exampleInputPassword1"/>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Orientation</label>
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
        <div className="mb-3">
          <label htmlFor="myfile">Select a file:</label>
          <input type="file" id="myfile" name="myfile" className="form-control"/>
          <div className="d-flex align-items-center">
            <button type="button" className="btn btn-primary my-2" data-bs-toggle="modal" data-bs-target="#map" onClick={markerMap}>Choose Shop</button>
            <span>{isDisplay ? shoper.name : ''}</span>
          </div>
        </div>
        <div className="d-flex gap-2 justify-content-center">
          <button type="submit" className="btn btn-primary rounded-pill" id="btn-submit">Submit</button>
          <button type="submit" className="btn btn-danger">Cancel</button>
        </div>
      </form>

      <div className="modal fade" id="map" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body">
              <Map 
                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBzD7RM95yQyWvUuElp9RIe6YC5whFL37k"
                loadingElement={<div style={{ height: `50%` }} />}
                containerElement={<div style={{ height: `400px` }} />}
                mapElement={<div style={{ height: `100%` }} />}
                marker={shopers}
                selfCoordinate={currentCoordinate}
                setLocate={setLocate}
              />
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
              <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onClick={submitMap} >Submit</button>
          </div>
          </div>
        </div>
      </div>
    </div>
  ) 
}

export default PrintForm