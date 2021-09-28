import { SET_USER_OLD } from "../actionTypes/userActionTypes";

const initialState = {
  isUserOld: false,
};
export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER_OLD:
      return {
        isUserOld: action.payload,
      };

    default:
      return state;
  }
}
