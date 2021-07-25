import axios from 'axios';
import {
  GET_ONE_ROUTE_REQUEST,
  GET_ONE_ROUTE_SUCCESS,
  GET_ONE_ROUTE_FAILURE,
} from './actionTypes';

const getOneRouteRequest = () => {
  return {
    type: GET_ONE_ROUTE_REQUEST,
  };
};

const getOneRouteSuccess = (payload) => {
  return {
    type: GET_ONE_ROUTE_SUCCESS,
    payload,
  };
};

const getOneRouteFailure = () => {
  return {
    type: GET_ONE_ROUTE_FAILURE,
  };
};


const getRouteBuses = (from, to) => async (dispatch) => {
  dispatch(getOneRouteRequest())
  try {
    const data = await axios.get(
      `http://localhost:7000/buses/search/${from}/${to}`
    );

    dispatch(getOneRouteSuccess(data.data));
  } catch (err) {
    console.log(err);
  }
};


export { getRouteBuses };
