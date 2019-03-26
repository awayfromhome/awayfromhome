import axios from 'axios';
import {
  updateAccountFormSide,
  toggleAccountForm,
  getUserFulfilled,
  handleLogoutFulfilled,
  getUserPending,
  getUserRejected,
  handleLogoutPending,
  handleLogoutRejected
} from './authSync';

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
    await dispatch(getUserPending());
    try {
      const response = await axios.get('/auth/user');
      dispatch(getUserFulfilled(response.data));
    } catch {
      dispatch(getUserRejected());
    }
  };
};

export const handleLogout = () => {
  return async dispatch => {
    await dispatch(handleLogoutPending());
    try {
      const response = await axios.get('/auth/logout');
      dispatch(handleLogoutFulfilled(response.data));
    } catch {
      dispatch(handleLogoutRejected());
    }
  };
};
