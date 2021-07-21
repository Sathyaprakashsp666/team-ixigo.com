import React from 'react'
import { Link } from 'react-router-dom'
import style from './BusRoutes.module.css'

const BusDestination = () => {
  var destination_array = [
    'Delhi To Shimla Bus',
    'Pune To Goa Bus',
    'Delhi To Dharamshala Bus',
    'Manali To Delhi Bus',
    'Goa To Mumbai Bus',
    'Delhi To Nainital Bus',
    'Delhi To Manali Bus',
    'Bangalore To Ooty Bus',
    'Chennai To Coimbatore Bus',
    'Chandigarh To Manali Bus',
    'Surat To Ahmedabad Bus',
    'Bangalore To Goa Bus'
  ]
  return (
    <div className={style.mainContainer}>
      <div className={style.BusRoute_container}>
        <header>Top Tourist Bus Routes</header>
        <p>
          When it comes to India, there’s absolutely no shortage of splendid
          tourist locations. To experience their beauty, simply make your bus
          booking online! Avail amazing deals, a huge choice of operators,
          instant refunds and 24x7 customer support on your bus tickets right
          here.
        </p>
        <div className={style.destination_Container}>
          {destination_array.map((item, index) => {
            return (
              <Link key={index} className={style.destination_item}>
                {item}
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default BusDestination
