import reducer from '../ducks/auth/authReducer';
import { initialState } from '../ducks/auth/authReducer';
import {
  GET_USER_PENDING,
  GET_USER_FULFILLED,
  GET_USER_REJECTED,
  HANDLE_LOGOUT_FULFILLED,
  HANDLE_LOGOUT_PENDING,
  HANDLE_LOGOUT_REJECTED,
  UPDATE_ACCOUNT_FORM_SIDE,
  TOGGLE_ACCOUNT_FORM
} from '../ducks/constants';

describe('handle logout reducer', () => {
  it('handles user logout fulfilled', () => {
    const action = {
      type: HANDLE_LOGOUT_FULFILLED,
      payload: {},
      pending: false
    };
    expect(reducer(initialState, action)).toEqual({ ...initialState, pending: false, user: {} });
  });

  it('handles user logout pending', () => {
    const action = {
      type: HANDLE_LOGOUT_PENDING,
      pending: true
    };
    expect(reducer(initialState, action)).toEqual({ ...initialState, pending: true });
  });

  it('handles user logout rejected', () => {
    const action = {
      type: HANDLE_LOGOUT_REJECTED,
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

describe('authenticate reducer', () => {
  it('returns the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('handles getting user pending', () => {
    const action = {
      type: GET_USER_PENDING,
      pending: true
    };
    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      pending: true
    });
  });
  it('handles getting user fulfilled', () => {
    const action = {
      type: GET_USER_FULFILLED,
      payload: { id: 1, username: 'bob', role: 'owner' },
      pending: false
    };
    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      user: { id: 1, username: 'bob', role: 'owner' },
      pending: false
    });
  });

  it('handles signup rejected', () => {
    const action = {
      type: GET_USER_REJECTED,
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

describe('it updates and toggles account form side', () => {
  it('toggles account form side', () => {
    const action = {
      type: TOGGLE_ACCOUNT_FORM
    };
    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      accountFormToggle: true
    });
  });

  it('updates account form side', () => {
    const action = {
      type: UPDATE_ACCOUNT_FORM_SIDE,
      payload: 'Register'
    };
    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      accountFormSide: 'Register'
    });
  });
});
