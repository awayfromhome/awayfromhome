import { updateAccountFormSide, toggleAccountForm, getUserFulfilled, getHotelListFulfilled } from './sync';
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
