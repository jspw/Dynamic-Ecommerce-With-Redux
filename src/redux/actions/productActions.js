import { getProducts } from "../../api/products";
import {
  FETCH_PRODUCTS_FAILURE,
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  GET_PRODUCTS,
} from "../actionTypes/productActions";

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

export function getProducts() {
  return {
    type: GET_PRODUCTS,
  };
}

// export function fetchProducts() {
//   return function (dispatch) {
//     dispatch(fetchProductsRequest);
//     getProducts()
//       .then(function (response) {
//         dispatch(fetchProductsSuccess(response.data));
//       })
//       .catch(function (error) {
//         dispatch(fetchProductsFailure(error.message));
//       });
//   };
// }
