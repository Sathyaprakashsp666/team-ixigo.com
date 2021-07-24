import React from "react";
import Footer from "../Footer/Footer";
import MiddlePart from "../MiddlePart/MiddlePart";
import Navbar from "./Navbar";

const LandingPage = () => {
  return (
    <div>
      <Navbar/><br/><br/><br/><br/><br/>
      <MiddlePart />
      <Footer/>
    </div>
  );
};

export default LandingPage;
