import {
  SET_USER,
  TOGGLE_ACCOUNT_FORM,
  UPDATE_ACCOUNT_FORM_SIDE,
  GET_USER_FULFILLED,
  GET_HOTEL_LIST_FULFILLED,
  HANDLE_LOGOUT_FULFILLED,
  GET_HOTEL_LIST_BY_ID_FULFILLED,
  SET_SEARCH_INFO,
  SET_ROLE
} from './constants';

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

export const getUserFulfilled = user => {
  return {
    type: GET_USER_FULFILLED,
    payload: user
  };
};

export const getHotelListFulfilled = hotelList => {
  return {
    type: GET_HOTEL_LIST_FULFILLED,
    payload: hotelList
  };
};

export const handleLogoutFulfilled = user => {
  return {
    type: HANDLE_LOGOUT_FULFILLED,
    payload: user
  };
};

export const getHotelListByIdFulfilled = hotelList => {
  return {
    type: GET_HOTEL_LIST_BY_ID_FULFILLED,
    payload: hotelList
  };
};

export const setUser = user => {
  return {
    type: SET_USER,
    payload: user
  };
};
export const setSearchInfo = searchInfo => {
  return {
    type: SET_SEARCH_INFO,
    payload: searchInfo
  };
};

export const setRole = role => {
  return {
    type: SET_ROLE,
    payload: role
  };
};
