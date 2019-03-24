import {
  SET_USER,
  TOGGLE_ACCOUNT_FORM,
  UPDATE_ACCOUNT_FORM_SIDE,
  GET_USER_FULFILLED,
  GET_HOTEL_LIST_FULFILLED,
  HANDLE_LOGOUT_FULFILLED,
  GET_HOTEL_LIST_BY_ID_FULFILLED
} from './constants';

let initialState = {
  user: {},
  hotelList: [],
  accountFormToggle: false,
  accountFormSide: 'Register'
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_HOTEL_LIST_BY_ID_FULFILLED:
      return { ...state, hotelList: action.payload.data };
    case SET_USER:
      return { ...state, user: action.payload };
    case UPDATE_ACCOUNT_FORM_SIDE:
      return { ...state, accountFormSide: action.payload };
    case TOGGLE_ACCOUNT_FORM:
      return { ...state, accountFormToggle: !state.accountFormToggle };
    case GET_HOTEL_LIST_FULFILLED:
      return { ...state, hotelList: action.payload.data };
    case GET_USER_FULFILLED:
      return { ...state, user: action.payload.data };
    case HANDLE_LOGOUT_FULFILLED:
      return { ...state, user: action.payload.data };
    default:
      return state;
  }
}
