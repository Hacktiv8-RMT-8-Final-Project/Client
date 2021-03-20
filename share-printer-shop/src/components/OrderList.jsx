import '../styles/style.css'

function OrderList ({data}) {
  return (
    <div className="bg-light m-2 p-2 order-item d-flex justify-content-around align-items-center">
      <p>{data}</p>
      <p>Status</p>
      <div>
        <select className="mx-3">
          <option value="pending">Pending</option>
          <option value="done">Done</option>
        </select>
        <button className="btn btn-primary">Change Status</button>
      </div>
    </div>
  )
}

export default OrderList