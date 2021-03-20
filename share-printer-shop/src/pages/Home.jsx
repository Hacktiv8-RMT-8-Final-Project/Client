// import Navbar from '../components/Navbar';
import '../styles/style.css'
import OrderList from '../components/OrderList'
import { useState } from 'react'
import NewHomepage from '../components/NewHomepage'

function Home (){
  const [data, setData] = useState(['Order 1', 'Order 2', 'Order 3'])

  return (
    <>
    <NewHomepage />
      {/* <h1 className="mt-3">Dashboard</h1>
      <div className="container-home">
        <div className="d-flex justify-content-around">
          <div className="bg-success rules d-flex flex-column rounded">
            <div className="my-2 text-center">
              <p className="my-2">status</p>
              <button>Tombol Switch</button>
            </div>
            <div className="p-3 text-wrap">
                Ini Rules
            </div>
          </div>
          <div className="bg-info w-100 order-list d-flex flex-column align-items-center rounded py-2">
            {
              data.map((item, index) => {
                return <OrderList data={item} key={index} />
              })
            }
          </div>
          <Navbar />
        </div>
        <div className="position-relative cont-chat">
          <div className="position-absolute bottom-0 end-0">
            <button className="px-5 py-2">Chat</button>
          </div>
        </div>
      </div> */}
    </>
  )
}

export default Home