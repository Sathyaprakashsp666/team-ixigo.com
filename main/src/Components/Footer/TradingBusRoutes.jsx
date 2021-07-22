import React from 'react'
import style from './Footer.module.css'

var trdingRoutes = [
  'Pune To Mumbai Bus',
  'Bangalore To Coimbatore Bus',
  'Goa To Bangalore Bus',
  'Patna To Delhi Bus',
  'Bangalore To Pune Bus',
  'Madurai To Chennai Bus',
  'Jaipur To Jodhpur Bus',
  'Coimbatore To Bangalore Bus',
  'Jaipur To Udaipur Bus',
  'Goa To Hyderabad Bus',
  'Bangalore To Mangalore Bus',
  'Siliguri To Kolkata Bus',
  'Ahmedabad To Udaipur Bus',
  'Goa To Pune Bus',
  'Gorakhpur To Delhi Bus',
  'Amritsar To Delhi Bus',
  'Delhi To Jalandhar Bus',
  'Ludhiana To Delhi Bus',
  'Mumbai To Hyderabad Bus',
  'Kolkata To Bhubaneswar Bus'
]

const TradingBusRoutes = () => {
  return (
    <div className={style.boxmargin}>
      {trdingRoutes.map(item => {
        return <div className={style.Routes_flot}>{item}</div>
      })}
    </div>
  )
}

export default TradingBusRoutes
