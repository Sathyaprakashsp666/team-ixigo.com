import React from "react";
import { Link } from "react-router-dom";
import style from "./BusRoutes.module.css";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";

const BusDestination = () => {
  var destination_array = [
    {
      title: "Top Tourist Bus Routes",
      para: "When it comes to India, there’s absolutely no shortage of splendid tourist locations. To experience their beauty, simply make your bus booking online! Avail amazing deals, a huge choice of operators, instant refunds and 24x7 customer support on your bus tickets right here.",

      route: [
        "Delhi To Shimla Bus",
        "Pune To Goa Bus",
        "Delhi To Dharamshala Bus",
        "Manali To Delhi Bus",
        "Goa To Mumbai Bus",
        "Delhi To Nainital Bus",
        "Delhi To Manali Bus",
        "Bangalore To Ooty Bus",
        "Chennai To Coimbatore Bus",
        "Chandigarh To Manali Bus",
        "Surat To Ahmedabad Bus",
        "Bangalore To Goa Bus",
      ],
    },
    {
      title: "Top Pilgrimage Bus Routes",
      para: "While going on a pilgrimage in a bus, make your booking online! Select your favourite seat, find the cheapest bus and get instant notifications about the bus schedule, along with fare drop alerts and great bus booking deals.",

      route: [
        "Delhi To Haridwar Bus",
        "Bangalore To Tirupati Bus",
        "Mumbai To Shirdi Bus",
        "Delhi To Amritsar Bus",
        "Delhi To Rishikesh Bus",
        "Delhi To Jammu Bus",
        "Kolkata To Digha Bus",
        "Jaipur To Bikaner Bus",
        "Delhi To Katra Bus",
        "Chennai To Tirupati Bus",
        "Agra To Jaipur Bus",
        "Hyderabad To Tirupati Bus",
      ],
    },

    {
      title: "Top Searched Bus Routes in India",
      para: "Your search for the best and cheapest deals on top searched routes in India ends here. Choose from sleeper, semi-sleeper, volvo and many more buses while booking online and get the cheapest fare, multiple paying options, best discounts and 24x7 customer service.",

      route: [
        "Bangalore To Chennai Bus",
        "Chennai To Bangalore Bus",
        "Mumbai To Goa Bus",
        "Indore To Bhopal Bus",
        "Mumbai To Pune Bus",
        "Jaipur To Delhi Bus",
        "Hyderabad To Goa Bus",
        "Hyderabad To Chennai Bus",
        "Delhi To Jaipur Bus",
        "Delhi To Chandigarh Bus",
        "Chandigarh To Delhi Bus",
        "Pune To Hyderabad Bus",
      ],
    },
  ];
  return (
    <>
      <div className={style.mainContainer}>
        {destination_array.map((item) => {
          return (
            <div className={style.BusRoute_container}>
              <header>{item.title}</header>
              <p>{item.para}</p>
              <div className={style.destination_Container}>
                {item.route.map((item, index) => {
                  return (
                    <Link key={index} className={style.destination_item}>
                      {item}
                      <KeyboardArrowRightIcon
                        fontSize="small"
                        className={style.arrow}
                      />
                    </Link>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default BusDestination;
