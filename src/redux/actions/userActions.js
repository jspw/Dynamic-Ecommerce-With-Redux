import { SET_USER_OLD } from "../actionTypes/userActionTypes";

export function setUserOld() {
  return {
    type: SET_USER_OLD,
    payload: true,
  };
}
