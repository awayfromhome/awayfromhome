import axios from 'axios';

import { GET_HOTEL_LIST, TOGGLE_ACCOUNT_FORM, UPDATE_ACCOUNT_FORM_SIDE } from './constants';

let initialState = {
   hotelList: [],
   accountFormToggle: false,
   accountFormSide: 'Register'
};

export const getHotelList = value => {
   return {
      type: GET_HOTEL_LIST,
      payload: axios.post('/api/hotel', value)
   };
};

export default function reducer(state = initialState, action) {
   switch (action.type) {
      case UPDATE_ACCOUNT_FORM_SIDE:
         return { ...state, accountFormSide: action.payload };
      case TOGGLE_ACCOUNT_FORM:
         return { ...state, accountFormToggle: !state.accountFormToggle };
      case `${GET_HOTEL_LIST}_PENDING`:
         return { ...state, pending: true };
      case `${GET_HOTEL_LIST}_FULFILLED`:
         return { ...state, hotelList: action.payload.data };
      default:
         return state;
   }
}
