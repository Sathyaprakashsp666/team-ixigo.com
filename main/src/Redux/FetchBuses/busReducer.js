import {
  GET_ONE_ROUTE_REQUEST,
  GET_ONE_ROUTE_SUCCESS,
  GET_ONE_ROUTE_FAILURE,
  GET_ONE_BUS_DATA,
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
    case GET_ONE_BUS_DATA:
        return {
            ...state,
            isLoading: false,
            currentBus: payload
        }
    default:
      return state;
  }
};

export { busReducer };
