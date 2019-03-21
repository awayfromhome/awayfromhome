import { GET_HOTEL_LIST, TOGGLE_ACCOUNT_FORM, UPDATE_ACCOUNT_FORM_SIDE } from './constants';

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
