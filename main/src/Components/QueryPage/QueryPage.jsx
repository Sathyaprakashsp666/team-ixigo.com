import { useSelector } from "react-redux"
import { BusCard } from "./BusCard"
import { NavBar } from "./NavBar"





export const QueryPage = () => {
    const data = useSelector(state => state.busReducer.busData.data[0])
    console.log(data)
    return (
        <div style={{background: "#f2f2f2"}}>
            <NavBar />
            {
                data.buses.map(bus => (
                    <BusCard data={bus}/>
                ))
            }   
        </div>
    )
}