import {
  GET_HOTEL_LIST_FULFILLED,
  GET_HOTEL_LIST_BY_ID_FULFILLED,
  SET_SEARCH_INFO,
  SET_HOTEL_INFO,
  SET_OUTER_TABS,
  SET_INNER_TABS
} from '../constants';

let initialState = {
  hotelList: [],
  setSearchInfo: {},
  hotelInfo: {},
  outerTabs: 0,
  innerTabs: 0
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_HOTEL_LIST_BY_ID_FULFILLED:
      return { ...state, hotelList: action.payload.data };
    case GET_HOTEL_LIST_FULFILLED:
      return { ...state, hotelList: action.payload.data };
    case SET_SEARCH_INFO:
      return { ...state, setSearchInfo: action.payload };
    case SET_HOTEL_INFO:
      return { ...state, hotelInfo: action.payload };
    case SET_OUTER_TABS:
      return { ...state, outerTabs: action.payload };
    case SET_INNER_TABS:
      return { ...state, innerTabs: action.payload };
    default:
      return state;
  }
}
