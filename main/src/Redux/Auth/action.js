import axios from 'axios';
import { FETCH_USER } from './actionTypes';

export const fetchUser = () => async dispatch => {
  const user = await axios.get('/api/user');

  dispatch({ type: FETCH_USER, payload: user.data });
};
