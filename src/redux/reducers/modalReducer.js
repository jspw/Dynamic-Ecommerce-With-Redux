import { HIDE_MODAL, SHOW_MODAL } from "../actionTypes/modalActionTypes";

const initialState = {
  isModalVisible: false,
};

export default function modalReducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_MODAL:
      return {
        isModalVisible: true,
      };

    case HIDE_MODAL:
      return {
        isModalVisible: false,
      };

    default:
      return state;
  }
}
