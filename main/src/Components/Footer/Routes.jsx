import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Busbooking from './Busbooking'
import PopularBusOpp from './PopularBusOpp'
import PopularBusRoutes from './PopularBusRoutes'
import TopBusRoutes from './TopBusRoutes'
import TradingBusRoutes from './TradingBusRoutes'
import FooterLink from "./FooterLink"

const FooterRoutes = () => {
  return (
    <div>
     
      <Switch>
        <Route exact path="/bus" >
          <Busbooking />
        </Route>
        <Route exact path="/popular_opp">
          <PopularBusOpp />
        </Route>
        <Route exact path="/popular_bus">
          <PopularBusRoutes />
        </Route>
        <Route exact path="/top_bus">
          <TopBusRoutes />
        </Route>
        <Route exact path="/trading_bus">
          <TradingBusRoutes />
        </Route>
      </Switch>
    </div>
  )
}

export default FooterRoutes
