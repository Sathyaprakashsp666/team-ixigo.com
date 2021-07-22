import React from 'react'
import style from './Footer.module.css'

var topBus = [
  'Nagpur To Raipur Bus',
  'Vijayawada To Bangalore Bus',
  'Ahmedabad To Surat Bus',
  'Ahmedabad To Mumbai Bus',
  'Indore To Mumbai Bus',
  'Indore To Pune Bus',
  'Jodhpur To Jaipur Bus',
  'Chennai To Hyderabad Bus',
  'Pune To Indore Bus',
  'Bikaner To Jaipur Bus',
  'Indore To Ahmedabad Bus',
  'Pune To Aurangabad Bus',
  'Ranchi To Bhubaneswar Bus',
  'Kanpur To Delhi Bus',
  'Tirupati To Bangalore Bus',
  'Lucknow To Banaras Bus',
  'Jammu To Delhi Bus',
  'Delhi To Gorakhpur Bus',
  'Delhi To Kanpur Bus',
  'Jalandhar To Delhi Bus'
]

const TopBusRoutes = () => {
  return (
    <div className={style.boxmargin}>
      {topBus.map(item => {
        return <div className={style.Routes_flot}>{item}</div>
      })}
    </div>
  )
}

export default TopBusRoutes
