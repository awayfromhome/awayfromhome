import { TOGGLE_ACCOUNT_FORM, UPDATE_ACCOUNT_FORM_SIDE, GET_USER_FULFILLED, GET_HOTEL_LIST_FULFILLED, HANDLE_LOGOUT_FULFILLED } from './constants';

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
