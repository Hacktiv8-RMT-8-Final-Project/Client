// import Navbar from '../components/Navbar';
import './style.css'

function Home (){
  return (
    <div className="container-home">
      <div className="d-flex justify-content-around">
        <div className="bg-success rules d-flex flex-column">
          <div className="m-3 align-self-center">
            <button>Tombol Switch</button>
          </div>
          Ini Switch Sama Tata Cara
        </div>
        <div className="bg-info w-100 order-list d-flex flex-column align-items-center">
          <div className="bg-light m-2 p-2 d-flex order-item d-flex justify-content-around">
            Order 1
            <button>Change Status</button>
          </div>
          <div className="bg-light m-2 p-2 order-item d-flex justify-content-around">
            Order 2
            <button>Change Status</button>
          </div>
          <div className="bg-light m-2 p-2 order-item d-flex justify-content-around">
            Order 2
            <button>Change Status</button>
          </div>
          <div className="bg-light m-2 p-2 order-item d-flex justify-content-around">
            Order 2
            <button>Change Status</button>
          </div>
          {/* <ul class="list-group m-2 p-2 d-flex order-item">
            <li class="list-group-item m-2">An item</li>
            <li class="list-group-item m-2">A second item</li>
          </ul> */}
        </div>
        {/* <Navbar /> */}
      </div>
      <div className="position-relative cont-chat">
        <div className="position-absolute bottom-0 end-0">
          <button className="px-5 py-2">Chat</button>
        </div>
      </div>
    </div>
  )
}

export default Home