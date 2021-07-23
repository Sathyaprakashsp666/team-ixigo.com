import React from "react";
import { Route, Switch } from "react-router-dom";
import LandingPage from "../LandingPage/LandingPage";
import MiddlePart from "../MiddlePart/MiddlePart";
import { QueryPage } from "../QueryPage/QueryPage";

const Rotes = () => {
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <LandingPage />
          <MiddlePart />
        </Route>
        <Route path="/search" >
          <QueryPage />
        </Route>
      </Switch>
    </div>
  );
};

export default Rotes;
