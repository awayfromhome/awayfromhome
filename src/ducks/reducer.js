import axios from "axios";

let initialState = {
  hotelList: []
};

const GET_HOTEL_LIST = "GET_HOTEL_LIST";

export const getHotelList = value => {
  return {
    type: GET_HOTEL_LIST,
    payload: axios.post("/api/hotel", value)
  };
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case `${GET_HOTEL_LIST}_PENDING`:
      return { ...state, pending: true };
    case `${GET_HOTEL_LIST}_FULFILLED`:
      return { ...state, hotelList: action.payload.data };
    default:
      return state;
  }
}
