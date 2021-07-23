import { FETCH_USER } from './actionTypes';

export const authReducer=(state = null, action)=> {
  switch (action.type) {
    case FETCH_USER:
      return action.payload || false;
    default:
      return state;
  }
}
