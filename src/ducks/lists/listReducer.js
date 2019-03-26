import { GET_HOTEL_LIST_FULFILLED, GET_HOTEL_LIST_BY_ID_FULFILLED, SET_SEARCH_INFO } from '../constants';

let initialState = {
  hotelList: [],
  setSearchInfo: {}
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_HOTEL_LIST_BY_ID_FULFILLED:
      return { ...state, hotelList: action.payload.data };
    case GET_HOTEL_LIST_FULFILLED:
      return { ...state, hotelList: action.payload.data };
    case SET_SEARCH_INFO:
      return { ...state, setSearchInfo: action.payload };
    default:
      return state;
  }
}
