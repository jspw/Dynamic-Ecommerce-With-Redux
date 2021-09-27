import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ShopContext } from "../../Context/ShopContext";
import useProducts from "../../hooks/useProducts";
import Products from "../Products/Products";
import Categories from "./Category/Categories";
import SearchBar from "./SearchBar";

export default function Home() {
  // const { products } = useContext(ShopContext);

  const dispatch = useDispatch();

  useProducts();

  // const {loading} = useSelector( state => state )

  return (
    <div>
      <SearchBar />
      {/* <Categories /> */}
      <Products products={products} />
    </div>
  );
}
