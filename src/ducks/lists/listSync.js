import {
  GET_HOTEL_LIST_FULFILLED,
  GET_HOTEL_LIST_BY_ID_FULFILLED,
  SET_SEARCH_INFO,
  SET_HOTEL_INFO,
  SET_OUTER_TABS,
  SET_INNER_TABS
} from '../constants';

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

export const setHotelInfo = hotel => {
  return {
    type: SET_HOTEL_INFO,
    payload: hotel
  };
};

export const setOuterTabs = val => {
  return {
    type: SET_OUTER_TABS,
    payload: val
  };
};

export const setInnerTabs = val => {
  return {
    type: SET_INNER_TABS,
    payload: val
  };
};
