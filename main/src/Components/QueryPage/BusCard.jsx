import { Link } from "react-router-dom";
import AcUnitIcon from '@material-ui/icons/AcUnit';
import "./BusCard.css"


export const BusCard = ({data}) => {
    const getCurrentBusData = () => {
        localStorage.setItem("currentBusData", JSON.stringify(data))
    }
    return (
        <div className="card_container" >
            <div className="card_container_left_box">
                <div className="bus_type_container">
                    <div style={{fontWeight: "600"}}>{data.travelerAgentName}</div>
                    {data.AC ? (<div>
                        <AcUnitIcon fontSize="small" />
                        <div>AC</div>
                    </div>) : null}
                </div>
                <div className="bus_timings_container">
                    <div className="departure_time">{data.startTime.slice(0,5)}</div>
                    <div className="travel_time">
                        <div>{data.travelTime.slice(0,2) + "hr " + data.travelTime.slice(3,5) + "min"}</div>
                        <div>
                            <img src="https://cdn.kastatic.org/ka-perseus-graphie/a26f5a5d1677c840eb556ced719307a3de52c26f.png" alt="line" />
                        </div>
                    </div>
                    <div className="arrival_time">{data.arrivalTime.slice(0,5)}</div>
                </div>
                <div className="bus_name">
                    {data.busTypeName}
                </div>
            </div>
            <div className="card_container_right_box">
                <div className="start_from_container">Starts from</div>
                <div className="price_container">
                    <div className="get_container">Save &#8377;{data.discount} </div>
                    <div className="seat_price_container">
                        <div> <strike>&#8377;{data.providedSeatFare}</strike></div>
                        <div> &#8377;{data.seatFare}</div>
                    </div>
                </div>
                <Link to="/payment"><button onClick={getCurrentBusData} className="select_button">Book Now</button></Link>
                <div className="seats_left_container">{data.availableSeats} Seats Left</div>
            </div>
            
        </div>
        

    )
}