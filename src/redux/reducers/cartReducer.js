import {
  ADD_PRODUCT_TO_CART,
  CLEAR_CART,
  DECREASE_PRODUCT_QUANTITY_IN_CART,
  INCREASE_PRODUCT_QUANTITY_IN_CART,
  REMOVE_PRODUCT_FROM_CART,
} from "../actionTypes/cartActionTypes";

function cartFormatter(products) {
  let payableAmount = 0;
  let totalProducts = 0;
  let totalQuantity = 0;

  Object.values(products).forEach((product) => {
    totalProducts++;
    totalQuantity = +product.quantity;
    payableAmount += product.price * product.quantity;
  });

  return {
    id: Date.now() + Math.random(),
    products,
    totalProducts,
    totalQuantity,
    payableAmount,
  };
}

export function productFormatter({ id, title, price, image, quantity }) {
  return {
    id,
    title,
    price,
    image,
    quantity: quantity || 1,
  };
}

const initialState = cartFormatter({});

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART: {
      const cartProducts = {
        ...state.products,
        [action.payload.id]: productFormatter(action.payload),
      };

      return cartFormatter(cartProducts);
    }
    case REMOVE_PRODUCT_FROM_CART: {
      const updatedCart = state;
      delete updatedCart.products[action.payload];
      const cartProducts = {
        ...updatedCart.products,
      };
      return cartFormatter(cartProducts);
    }

    case INCREASE_PRODUCT_QUANTITY_IN_CART: {
      const updatedCart = state;
      updatedCart.products[action.payload].quantity++;
      const cartProducts = {
        ...updatedCart.products,
      };

      return cartFormatter(cartProducts);
    }

    case DECREASE_PRODUCT_QUANTITY_IN_CART: {
      const updatedCart = state;
      updatedCart.products[action.payload].quantity--;
      if (updatedCart.products[action.payload].quantity === 0)
        delete updatedCart.products[action.payload];
      const cartProducts = {
        ...updatedCart.products,
      };

      return cartFormatter(cartProducts);
    }
    case CLEAR_CART: {
      return initialState;
    }

    default:
      return state;
  }
}
