import {
  FETCH_PRODUCTS_FAILURE,
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
} from "../actionTypes/productActionTypes";

function stateFormatter(loading, products, error) {
  return {
    loading,
    products,
    error,
  };
}

const initialState = stateFormatter(false, [], "");

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case FETCH_PRODUCTS_SUCCESS: {
      return stateFormatter(false, action.payload, "");
    }

    case FETCH_PRODUCTS_FAILURE: {
      return stateFormatter(false, [], action.payload);
    }

    default:
      return state;
  }
}
