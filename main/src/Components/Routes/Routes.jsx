import React from "react";
import { Route, Switch } from "react-router-dom";
import LandingPage from "../LandingPage/LandingPage";
import Trips from "../LandingPage/Trips";
import PaymentGateway from "../PaymentPage/PaymentGateway";
import PaymentPage from "../PaymentPage/PaymentPage";
import { QueryPage } from "../QueryPage/QueryPage";

const Routes = () => {
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <LandingPage />
        </Route>
        <Route path="/search">
          <QueryPage />
        </Route>
        <Route exact path="/payment">
          <PaymentPage />
        </Route>
        <Route exact path="/payment/gateway">
          <PaymentGateway />
        </Route>
        <Route path='/trips'>
          <Trips/>
        </Route>
      </Switch>
    </div>
  );
};

export default Routes;
