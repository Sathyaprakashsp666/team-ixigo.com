import React from "react";
import BusDestination from "./BusRoutes";
import BusApp from "./BusApp";
// import Sliderimg from './Sliderimg'

const MiddlePart = () => {
  return (
    <div>
      <BusDestination />
      <BusApp />
      <div style={{ clear: "both" }}></div>
    </div>
  );
};

export default MiddlePart;
