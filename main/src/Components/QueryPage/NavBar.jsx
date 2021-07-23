import "./NavBar.css"
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import TransitionsModal from "../LandingPage/LoginModal";

export const NavBar = () => {

    return (
        <div className="nav_bar_container">
            <div className="ixigo_logo_container">
                <img src="https://static.startuptalky.com/2020/10/image-35.png" alt="ixigo logo" />
            </div>
            <div className="categories">
                <div>
                    <Link className="single_category" to="">FLIGHTS</Link>
                </div>
                <div>
                    <Link className="single_category" to="">TRAINS</Link>
                </div>
                <div style={{borderBottom: "3px solid #ec5b24"}} >
                    <Link className="single_category" style={{color: "#ec5b24"}} to="">BUSES</Link>
                </div>
                <div>
                    <Link className="single_category" to="">HOTEL</Link>
                </div>
                <div>
                    <Link className="single_category" to="">OFFERS</Link>
                </div>
                <div>
                    <Link className="single_category" to="">TRAVEL STORIES</Link>
                </div>
                <div>
                    <Link className="single_category" to="">MORE</Link>
                </div>
            </div>
            <div>
                <Link to="">
                    <div className="navbar__profilePic">
                        <TransitionsModal img={<FaUserCircle size='2rem' />} />
                    </div>
                </Link>
            </div>
        </div >
    )
}