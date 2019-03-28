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

export const getHotelListPending = () => {
  return {
    type: GET_HOTEL_LIST_PENDING,
    pending: true
  };
};

export const getHotelListFulfilled = hotelList => {
  return {
    type: GET_HOTEL_LIST_FULFILLED,
    payload: hotelList,
    pending: false
  };
};

export const getHotelListRejected = () => {
  return {
    type: GET_HOTEL_LIST_REJECTED,
    pending: false,
    error: true
  };
};

export const getRoomListPending = () => {
  return {
    type: GET_ROOM_LIST_PENDING,
    pending: true
  };
};

export const getRoomeListFulfilled = roomList => {
  return {
    type: GET_ROOM_LIST_FULFILLED,
    payload: roomList,
    pending: false
  };
};

export const getRoomListRejected = () => {
  return {
    type: GET_ROOM_LIST_REJECTED,
    pending: false,
    error: true
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

export const updateStay = val => {
  return {
    type: SET_STAY_COUNT,
    payload: val
  };
};

export const updatePoints = val => {
  return {
    type: SET_POINTS,
    payload: val
  };
};
