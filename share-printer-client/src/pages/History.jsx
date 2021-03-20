import React from 'react'
import './history.css'

function History () {
  return (
    <div className="d-flex flex-column" id="container-history">
      <div className="" id="history-heading">
        <h3 className="" id="text-heading">History</h3>
      </div>
      <div className="shadow" id="container-card-history">
        <div className="shadow-sm mb-3" id="hsitory-card">
          <div class="card">
            <h5 class="card-header">Nama Toko</h5>
            <div class="card-body">
              <h5 class="card-title">Jenis warna: Color/BW</h5>
              <p class="card-text">Detail print</p>
              <p class="btn btn-primary">Status</p>
            </div>
          </div>
        </div>
      </div>
      
      
    </div>
  )
}

export default History