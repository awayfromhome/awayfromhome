import {
  GET_HOTEL_LIST_FULFILLED,
  SET_SEARCH_INFO,
  SET_HOTEL_INFO,
  SET_OUTER_TABS,
  SET_INNER_TABS,
  SET_STAY_COUNT,
  SET_POINTS,
  GET_HOTEL_LIST_PENDING,
  GET_HOTEL_LIST_REJECTED,
  GET_ROOM_LIST_PENDING,
  GET_ROOM_LIST_FULFILLED,
  GET_ROOM_LIST_REJECTED
} from '../constants';

export const initialState = {
  hotelList: [],
  roomList: [],
  setSearchInfo: {},
  hotelInfo: {},
  outerTabs: 0,
  innerTabs: 0,
  count: 0,
  points: 0,
  pending: false,
  error: false
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    //Get Hotel List
    case GET_HOTEL_LIST_PENDING:
      return { ...state, pending: action.pending };
    case GET_HOTEL_LIST_FULFILLED:
      return { ...state, pending: action.pending, hotelList: action.payload };
    case GET_HOTEL_LIST_REJECTED:
      return { ...state, pending: action.pending, error: action.error };
    //Get Room List
    case GET_ROOM_LIST_PENDING:
      return { ...state, pending: action.pending };
    case GET_ROOM_LIST_FULFILLED:
      return { ...state, pending: action.pending, roomList: action.payload };
    case GET_ROOM_LIST_REJECTED:
      return { ...state, pending: action.pending, error: action.error };
    //Info for searchbar
    case SET_SEARCH_INFO:
      return { ...state, setSearchInfo: action.payload };
    //Info for owners
    case SET_HOTEL_INFO:
      return { ...state, hotelInfo: action.payload };
    case SET_OUTER_TABS:
      return { ...state, outerTabs: action.payload };
    case SET_INNER_TABS:
      return { ...state, innerTabs: action.payload };
    //Info for users
    case SET_STAY_COUNT:
      return { ...state, count: action.payload };
    case SET_POINTS:
      return { ...state, points: action.payload };
    default:
      return state;
  }
}
