import React from "react";
import { Route, Switch } from "react-router-dom";
import LandingPage from "../LandingPage/LandingPage";
import { QueryPage } from "../QueryPage/QueryPage";

const Rotes = () => {
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

export default Rotes;
