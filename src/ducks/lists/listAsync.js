import {
  getHotelListFulfilled,
  getHotelListPending,
  getHotelListRejected,
  getRoomListPending,
  getRoomListRejected,
  getRoomeListFulfilled
} from './listSync';
import axios from 'axios';

export const getHotelList = (value, bool) => {
  return async dispatch => {
    await dispatch(getHotelListPending());
    try {
      let response;
      if (bool) {
        response = await axios.post('/api/hotel?byId=true', value);
      } else {
        response = await axios.post('/api/hotel', value);
      }
      dispatch(getHotelListFulfilled(response.data));
    } catch {
      dispatch(getHotelListRejected());
    }
  };
};

export const getRoomList = (id, bool) => {
  return async dispatch => {
    await dispatch(getRoomListPending());
    try {
      let response;
      if (bool) {
        response = await axios.get(`/api/room?byId=true`);
      } else {
        response = await axios.get(`/api/room/${id}`);
      }
      dispatch(getRoomeListFulfilled(response.data));
    } catch {
      dispatch(getRoomListRejected());
    }
  };
};
