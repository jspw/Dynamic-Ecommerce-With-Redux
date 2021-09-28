import {
  ADD_PRODUCT_TO_CART,
  CLEAR_CART,
  DECREASE_PRODUCT_QUANTITY_IN_CART,
  INCREASE_PRODUCT_QUANTITY_IN_CART,
  REMOVE_PRODUCT_FROM_CART,
} from "../actionTypes/cartActionTypes";

export function addProduct(product) {
  return {
    type: ADD_PRODUCT_TO_CART,
    payload: product,
  };
}

export function removeProductFromCart(productId) {
  return {
    type: REMOVE_PRODUCT_FROM_CART,
    payload: productId,
  };
}

export function increaseProductQuantity(productId) {
  return {
    type: INCREASE_PRODUCT_QUANTITY_IN_CART,
    payload: productId,
  };
}

export function decreaseProductQuantity(productId) {
  return {
    type: DECREASE_PRODUCT_QUANTITY_IN_CART,
    payload: productId,
  };
}

export function clearCart() {
  return {
    type: CLEAR_CART,
  };
}
