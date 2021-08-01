import React, { useContext } from "react";
import "./Trips.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contextApi/AuthContext";

const Trips = () => {
  const { setGmail, setName, setUrl, gmail, name, url, setUserIn, userin } =
    useContext(AuthContext);
  console.log(url);
  const userLogin = localStorage.getItem("userLogin");
  let { userinLocal, urlLocal, nameLocal } = JSON.parse(userLogin);
  console.log(userinLocal, urlLocal);

  const bookingData = localStorage.getItem("bookingData");
  let {
    FirstName,
    Gender,
    LastName,
    Mobile,
    arrivalTime,
    busTypeName,
    discount,
    orderId,
    seatFare,
    startTime,
    travelerAgentName,
  } = JSON.parse(bookingData);
  return (
    <>
      <div className="trips__bg">
        <div className="trips_header">
          <Link to="/">
            <img
              src="https://edge.ixigo.com/img/zeus/ixigo_logo_white-02.png"
              alt="ixigo"
              width="70px"
            />
          </Link>
          <Link>flights</Link>
          <Link>hotels</Link>
          <Link>buses</Link>
          <Link>trains</Link>
          <Link>trip planner</Link>
          <Link>more</Link>
          <Link>
            <img src={url || urlLocal} width="50px" className="trips__round" />
          </Link>
        </div>
        <div className="trips__space"></div>
        <div className="trips__profile">
          <div>
            <img src={url || urlLocal} width="150px" />
          </div>
          <div>
            <p>{name || nameLocal}</p>
          </div>
        </div>
      </div>
      <h3 className="trips__center">My trips</h3>

      <div className="trips__recordCont">
        <div>
          <h4>Delhi to Manali</h4>|
          <p>
            <b>Travl Agent :</b> {travelerAgentName}
          </p>
        </div>
        <div>
          <p>
            <b>Name:</b> {FirstName} {LastName}
          </p>
          {/* <p>
            <b>Gender:</b> {Gender}
          </p> */}
        </div>
        <div>
         
          <p>
            <b>Start Time:</b>
            {startTime}
          </p>|
          <p>
            <b>Arriving Time:</b>
            {arrivalTime}
          </p>
        </div>
        <div>
          <b>Seat Fare :</b> {seatFare}
        </div>
        <div>
          <b>Order Id :</b> {orderId}
        </div>
      </div>
      <div className="gateway__footer">
        <p>
          © 2021 Le Travenues Technology Pvt. Ltd. India. All brands are
          trademarks of their respective owners.
        </p>
      </div>
    </>
  );
};

export default Trips;
