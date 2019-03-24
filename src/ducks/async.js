import {
  updateAccountFormSide,
  toggleAccountForm,
  getUserFulfilled,
  getHotelListFulfilled,
  handleLogoutFulfilled,
  getHotelListByIdFulfilled
} from './sync';
import axios from 'axios';

export const handleAccountForm = side => {
  return async dispatch => {
    if (side) {
      dispatch(updateAccountFormSide(side));
      dispatch(toggleAccountForm());
    } else {
      dispatch(toggleAccountForm());
    }
  };
};

export const getUser = () => {
  return async dispatch => {
    const response = await axios.get('/auth/user');
    dispatch(getUserFulfilled(response));
  };
};

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

export const handleLogout = () => {
  return async dispatch => {
    const response = await axios.get('/auth/logout');
    dispatch(handleLogoutFulfilled(response));
  };
};
