import React from 'react'
import style from "./Footer.module.css"

var popular_route = [
    'Bangalore To Hyderabad Bus',
    'Hyderabad To Bangalore Bus',
    'Delhi To Dehradun Bus',
    'Delhi To Lucknow Bus',
    'Lucknow To Delhi Bus',
    'Dehradun To Delhi Bus',
    'Pune To Nagpur Bus',
    'Chennai To Madurai Bus',
    'Coimbatore To Chennai Bus',
    'Hyderabad To Mumbai Bus',
    'Hyderabad To Vijayawada Bus',
    'Bhopal To Indore Bus',
    'Vijayawada To Hyderabad Bus',
    'Agra To Delhi Bus',
    'Bangalore To Mumbai Bus',
    'Pune To Bangalore Bus',
    'Delhi To Agra Bus',
    'Delhi To Ludhiana Bus',
    'Mumbai To Bangalore Bus',
    'Nagpur To Pune Bus'
  ]

const PopularBusRoutes = () => {
  
  return (
      <div className={style.boxmargin}>
          
      {popular_route.map(item=>{
          return (
              <div className={style.Routes_flot}>{item}</div>
          )
      })}
      </div>
  )
}

export default PopularBusRoutes
