import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../api/products";
import {
  fetchProductsFailure,
  fetchProductsRequest,
  fetchProductsSuccess,
} from "../redux/actions/productActions";

export default function useProducts() {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  useEffect(function () {
    if (products.length === 0) {
      dispatch(fetchProductsRequest());
      getProducts()
        .then(function (response) {
          dispatch(fetchProductsSuccess(response.data));
        })
        .catch(function (error) {
          dispatch(fetchProductsFailure(error.message));
        });
    }
  });
}
