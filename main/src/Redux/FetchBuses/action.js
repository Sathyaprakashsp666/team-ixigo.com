import axios from "axios";
import { GET_ONE_ROUTE_REQUEST, GET_ONE_ROUTE_SUCCESS, GET_ONE_ROUTE_FAILURE } from "./actionTypes";


 const getOneRouteRequest = () => {
    return {
        type: GET_ONE_ROUTE_REQUEST
    }
}

 const getOneRouteSuccess = (payload) => {
    return {
        type: GET_ONE_ROUTE_SUCCESS,
        payload
    }
}

 const getOneRouteFailure = () => {
    return {
        type: GET_ONE_ROUTE_FAILURE
    }
}



export  const getRouteBuses = (from,to) => (dispatch) => {
    dispatch(getOneRouteRequest())
    axios.get(`http://localhost:7000/buses/search/${from}/${to}`)
    .then((res) => {
        console.log(res)
        dispatch(getOneRouteSuccess(res.data))
    })
    .catch((err) => {
        console.log("error in fetching bus data", err)
        dispatch(getOneRouteFailure())
    })
}

