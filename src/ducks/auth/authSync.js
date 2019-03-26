import {
  SET_USER,
  TOGGLE_ACCOUNT_FORM,
  UPDATE_ACCOUNT_FORM_SIDE,
  GET_USER_PENDING,
  GET_USER_FULFILLED,
  GET_USER_REJECTED,
  HANDLE_LOGOUT_FULFILLED,
  HANDLE_LOGOUT_PENDING,
  HANDLE_LOGOUT_REJECTED
} from '../constants';

export const toggleAccountForm = () => {
  return {
    type: TOGGLE_ACCOUNT_FORM
  };
};

export const updateAccountFormSide = side => {
  return {
    type: UPDATE_ACCOUNT_FORM_SIDE,
    payload: side
  };
};

export const setUser = user => {
  return {
    type: SET_USER,
    payload: user
  };
};

//Get User
export const getUserPending = () => {
  return {
    type: GET_USER_PENDING,
    pending: true
  };
};

export const getUserFulfilled = user => {
  return {
    type: GET_USER_FULFILLED,
    payload: user,
    pending: false
  };
};

export const getUserRejected = () => {
  return {
    type: GET_USER_REJECTED,
    pending: false,
    error: true
  };
};

//Logout User
export const handleLogoutPending = () => {
  return {
    type: HANDLE_LOGOUT_PENDING,
    pending: true
  };
};

export const handleLogoutFulfilled = user => {
  return {
    type: HANDLE_LOGOUT_FULFILLED,
    payload: user,
    pending: false
  };
};

export const handleLogoutRejected = () => {
  return {
    type: HANDLE_LOGOUT_REJECTED,
    pending: false,
    error: true
  };
};
