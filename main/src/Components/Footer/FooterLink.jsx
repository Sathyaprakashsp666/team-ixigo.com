import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './Footer.module.css'

const FooterButton = () => {
  return (
    <div>
      <NavLink
        className={style.link}
        to='/'
        activeStyle={{
          color: 'orangered',
          borderBottom: '2px solid orangered'
        }}
      >
        BUS BOOKING
      </NavLink>
      <NavLink
        className={style.link}
        to='/popular_bus'
        activeStyle={{
          color: 'orangered',
          borderBottom: '2px solid orangered'
        }}
      >
        POPULAR BUS ROUTES
      </NavLink>
      <NavLink
        className={style.link}
        to='/top_bus'
        activeStyle={{
          color: 'orangered',
          borderBottom: '2px solid orangered'
        }}
      >
        TOP BUS ROUTES
      </NavLink>
      <NavLink
        className={style.link}
        to='/trading_bus'
        activeStyle={{
          color: 'orangered',
          borderBottom: '2px solid orangered'
        }}
      >
        TRENDING BUS ROUTES
      </NavLink>
      <NavLink
        className={style.link}
        to='/popular_opp'
        activeStyle={{
          color: 'orangered',
          borderBottom: '2px solid orangered'
        }}
      >
        POPULAR BUS OPERATORS
      </NavLink>
    </div>
  )
}

export default FooterButton
