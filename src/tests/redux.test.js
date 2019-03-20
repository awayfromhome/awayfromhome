// export function addTodo(text) {
//     return {
//       type: 'ADD_TODO',
//       text
//     }
//   }

// import * as actions from '../../actions/TodoActions'
// import * as types from '../../constants/ActionTypes'

// describe('actions', () => {
//   it('should create an action to add a todo', () => {
//     const text = 'Finish docs'
//     const expectedAction = {
//       type: types.ADD_TODO,
//       text
//     }
//     expect(actions.addTodo(text)).toEqual(expectedAction)
//   })
// })

import { getHotelList, GET_HOTEL_LIST } from "../ducks/reducer";

describe("gethHotelList", () => {
  it("should create an action to get the list of hotels", () => {
    const text = "Ya passed";
    const expectedAction = {
      type: GET_HOTEL_LIST,
      text
    };
    expect(getHotelList(text)).toEqual(expectedAction);
  });
});
