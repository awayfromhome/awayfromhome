import { updateAccountFormSide, toggleAccountForm } from './sync';

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
