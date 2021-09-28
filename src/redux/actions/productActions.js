import { getProducts } from "../../api/products";
import {
  FETCH_PRODUCTS_FAILURE,
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
} from "../actionTypes/productActionTypes";
import { setUserOld } from "./userActions";

export function fetchProducts() {
  return function (dispatch) {
    dispatch(fetchProductsRequest());
    getProducts()
      .then((response) => {
        dispatch(fetchProductsSuccess(response.data));
        dispatch(setUserOld());
      })
      .catch((error) => {
        dispatch(fetchProductsFailure(error.message));
      });
  };
}
export function fetchProductsRequest() {
  return {
    type: FETCH_PRODUCTS_REQUEST,
  };
}

export function fetchProductsSuccess(products) {
  return {
    type: FETCH_PRODUCTS_SUCCESS,
    payload: products,
  };
}

export function fetchProductsFailure(error) {
  return {
    type: FETCH_PRODUCTS_FAILURE,
    payload: error,
  };
}
