import {
  SET_USER,
  UPDATE_ACCOUNT_FORM_SIDE,
  TOGGLE_ACCOUNT_FORM,
  GET_USER_FULFILLED,
  HANDLE_LOGOUT_FULFILLED,
  GET_USER_PENDING,
  GET_USER_REJECTED,
  HANDLE_LOGOUT_PENDING,
  HANDLE_LOGOUT_REJECTED
} from '../constants';

let initialState = {
  user: {},
  accountFormToggle: false,
  accountFormSide: 'Register',
  pending: false,
  error: false
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: { ...state.user, ...action.payload } };
    case UPDATE_ACCOUNT_FORM_SIDE:
      return { ...state, accountFormSide: action.payload };
    case TOGGLE_ACCOUNT_FORM:
      return { ...state, accountFormToggle: !state.accountFormToggle };
    //Get User
    case GET_USER_PENDING:
      return { ...state, pending: action.pending };
    case GET_USER_FULFILLED:
      return { ...state, pending: action.pending, user: { ...state.user, ...action.payload } };
    case GET_USER_REJECTED:
      return { ...state, pending: action.pending, error: action.error };
    //Logout User
    case HANDLE_LOGOUT_PENDING:
      return { ...state, pending: action.pending };
    case HANDLE_LOGOUT_FULFILLED:
      return { ...state, pending: action.pending, user: action.payload.data };
    case HANDLE_LOGOUT_REJECTED:
      return { ...state, pending: action.pending, error: action.error };
    default:
      return state;
  }
}
