import {
  GET_ONE_ROUTE_REQUEST,
  GET_ONE_ROUTE_SUCCESS,
  GET_ONE_ROUTE_FAILURE,
} from './actionTypes';

const initState = {
  isLoading: false,
  isError: false,
};

const busReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_ONE_ROUTE_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_ONE_ROUTE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        routeData: payload
      };
    case GET_ONE_ROUTE_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};

export { busReducer };
