import { getHotelListFulfilled, getHotelListByIdFulfilled } from './listSync';
import axios from 'axios';

export const getHotelList = value => {
  return async dispatch => {
    const response = await axios.post('/api/hotel', value);
    dispatch(getHotelListFulfilled(response));
  };
};

export const getHotelListById = () => {
  return async dispatch => {
    const response = await axios.get('/api/admin/hotel');
    dispatch(getHotelListByIdFulfilled(response));
  };
};
