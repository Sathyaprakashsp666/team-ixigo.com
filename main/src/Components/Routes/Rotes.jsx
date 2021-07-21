import React from "react";
import { Route, Switch } from "react-router-dom";
import LandingPage from "../LandingPage/LandingPage";

const Rotes = () => {
  return (
    <div>
      <Switch>
        <Route path="/">
          <LandingPage />
        </Route>
      </Switch>
    </div>
  );
};

export default Rotes;
