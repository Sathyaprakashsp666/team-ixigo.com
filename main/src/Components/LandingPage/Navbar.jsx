import React from "react";
// import { Link } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { CgArrowsExchange } from "react-icons/cg";
import { FaUserCircle } from "react-icons/fa";
import TransitionsModal from "./LoginModal";




const Navbar = () => {
 
  const handleChange = (e) => {};

  return (
    <div className="navbar__cont">
      <div className="navbar__header">
        <div className="navbar__logo">
          <Link to="">
            <img
              src="https://images.ixigo.com/image/upload/f_auto/2110b68e66ac684f22adf5b0e0870798-yfwgh.png"
              alt="ixigo"
            />
          </Link>
        </div>
        <div>
          <Link to="">FLIGHTS</Link>
        </div>
        <div>
          <Link to="">TRAINS</Link>
        </div>
        <div>
          <Link to="">BUSES</Link>
        </div>
        <div>
          <Link to="">HOTEL</Link>
        </div>
        <div>
          <Link to="">OFFERS</Link>
        </div>
        <div>
          <Link to="">TRAVEL STORIES</Link>
        </div>
        <div>
          <Link to="">MORE</Link>
        </div>
        <div>
          <Link to="">.</Link>
        </div>
        <div>
          <Link to="">
            <div className="navbar__profilePic">
              <TransitionsModal img={<FaUserCircle size='2rem'/>} />
            </div>
          </Link>
        </div>
      </div>

      <div className="navbar__busIcon">
        <div>
          <img
            src="https://images.ixigo.com/rt/pc/img/bus/compareBookWhite.png"
            alt="search"
          />
          ;
        </div>
        <div>
          <p>search . book . go</p>
        </div>
      </div>

      <div className="navbar__searchCont">
        <div>
          <div className="navbar__text">From</div>
          <div className="navbar___input" onChange={handleChange}>
            <input type="text" />
            <button>X</button>
            <CgArrowsExchange size="2rem" />
          </div>
        </div>
        <div>
          <div className="navbar__text">To</div>
          <div className="navbar___input">
            <input type="text" onChange={handleChange} />
            <button>X</button>
          </div>
        </div>
        <div>
          <div className="navbar__text">Date</div>
          <div className="navbar___input">
            {/* <input type='date' /> */}
            <input type="text" onChange={handleChange} />
          </div>
        </div>
        <div className="navbar__searchBtn">
          <button>Search</button>
        </div>
      </div>
      <div className="navbar__offerDiv">
        <img
          src="https://images.ixigo.com/image/upload/c847b7c6204ca0edf9cf60cca354a931-spkas.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Navbar;
