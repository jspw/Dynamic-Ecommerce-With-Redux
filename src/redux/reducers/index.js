import { combineReducers } from "redux";
import productReducer from "./productReducers";
import cartReducer from "./cartReducers";

const reducers = combineReducers({
  products: productReducer,
  cart: cartReducer,
});

export default reducers;
