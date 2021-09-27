import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProducts } from "../api/products";
import {
  fetchProducts,
  fetchProductsFailure,
  fetchProductsSuccess,
} from "../redux/actions/productActions";

export default function useProducts() {
  const dispatch = useDispatch();
  useEffect(function () {
    dispatch(fetchProducts());
    getProducts()
      .then(function (response) {
        dispatch(fetchProductsSuccess(response.data));
      })
      .catch(function (error) {
        dispatch(fetchProductsFailure(error.message));
      });
  });
}
