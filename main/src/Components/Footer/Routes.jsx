import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Busbooking from './Busbooking'
import PopularBusOpp from './PopularBusOpp'
import PopularBusRoutes from './PopularBusRoutes'
import TopBusRoutes from './TopBusRoutes'
import TradingBusRoutes from './TradingBusRoutes'

const FooterRoutes = () => {
  return (
    <div>
     
      <Switch>
        <Route exact path="/" >
          <Busbooking />
        </Route>
        <Route  path="/popular_opp">
          <PopularBusOpp />
        </Route>
        <Route  path="/popular_bus">
          <PopularBusRoutes />
        </Route>
        <Route  path="/top_bus">
          <TopBusRoutes />
        </Route>
        <Route  path="/trading_bus">
          <TradingBusRoutes />
        </Route>
      </Switch>
    </div>
  )
}

export default FooterRoutes
