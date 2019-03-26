import { GET_HOTEL_LIST_FULFILLED, GET_HOTEL_LIST_BY_ID_FULFILLED, SET_SEARCH_INFO } from './constants';

export const getHotelListFulfilled = hotelList => {
  return {
    type: GET_HOTEL_LIST_FULFILLED,
    payload: hotelList
  };
};

export const getHotelListByIdFulfilled = hotelList => {
  return {
    type: GET_HOTEL_LIST_BY_ID_FULFILLED,
    payload: hotelList
  };
};

export const setSearchInfo = searchInfo => {
  return {
    type: SET_SEARCH_INFO,
    payload: searchInfo
  };
};
