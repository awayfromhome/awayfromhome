import reducer from '../ducks/lists/listReducer';
import { initialState } from '../ducks/lists/listReducer';
import {
  GET_HOTEL_LIST_FULFILLED,
  GET_HOTEL_LIST_PENDING,
  GET_HOTEL_LIST_REJECTED,
  GET_ROOM_LIST_FULFILLED,
  GET_ROOM_LIST_PENDING,
  GET_ROOM_LIST_REJECTED
} from '../ducks/constants';

describe('authenticate reducer', () => {
  it('returns the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  describe('get hotel list', () => {
    it('handles getting hotel list pending', () => {
      const action = {
        type: GET_HOTEL_LIST_PENDING,
        pending: true
      };
      expect(reducer(initialState, action)).toEqual({
        ...initialState,
        pending: true
      });
    });

    it('handles getting hotel list fulfilled', () => {
      const action = {
        type: GET_HOTEL_LIST_FULFILLED,
        pending: false,
        payload: { hotel_name: 'Name' }
      };
      expect(reducer(initialState, action)).toEqual({
        ...initialState,
        pending: false,
        hotelList: { hotel_name: 'Name' }
      });
    });

    it('handles getting hotel list rejected', () => {
      const action = {
        type: GET_HOTEL_LIST_REJECTED,
        pending: false,
        error: true
      };
      expect(reducer(initialState, action)).toEqual({
        ...initialState,
        pending: false,
        error: true
      });
    });
  });

  describe('get room list', () => {
    it('handles getting room list pending', () => {
      const action = {
        type: GET_ROOM_LIST_PENDING,
        pending: true
      };
      expect(reducer(initialState, action)).toEqual({
        ...initialState,
        pending: true
      });
    });

    it('handles getting room list fulfilled', () => {
      const action = {
        type: GET_ROOM_LIST_FULFILLED,
        pending: false,
        payload: { room_name: 'Name' }
      };
      expect(reducer(initialState, action)).toEqual({
        ...initialState,
        pending: false,
        roomList: { room_name: 'Name' }
      });
    });

    it('handles getting room list rejected', () => {
      const action = {
        type: GET_ROOM_LIST_REJECTED,
        pending: false,
        error: true
      };
      expect(reducer(initialState, action)).toEqual({
        ...initialState,
        pending: false,
        error: true
      });
    });
  });
});
