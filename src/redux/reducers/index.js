import { combineReducers } from "redux";
import productReducer from "./productReducers";
import cartReducer from "./cartReducers";

const reducers = combineReducers({
  productReducer,
  cartReducer,
});

export default reducers;
