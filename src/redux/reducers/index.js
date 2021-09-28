import { combineReducers } from "redux";
import productReducer from "./productReducer";
import cartReducer from "./cartReducer";
import userReducer from "./userReducer";
import modalReducer from "./modalReducer";

const reducers = combineReducers({
  products: productReducer,
  cart: cartReducer,
  user: userReducer,
  modal: modalReducer,
});

export default reducers;
