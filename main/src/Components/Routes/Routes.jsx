import React from "react";
import { Route, Switch } from "react-router-dom";
import Footer from "../Footer/Footer";
import LandingPage from "../LandingPage/LandingPage";
import Navbar from "../LandingPage/Navbar";
import { QueryPage } from "../QueryPage/QueryPage";

const Routes = () => {
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <LandingPage />
        </Route>
        <Route path="/search" >
          <QueryPage />
        </Route>
      </Switch>
    </div>
  );
};

export default Routes;
