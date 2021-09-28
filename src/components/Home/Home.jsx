import { useSelector } from "react-redux";
import useProducts from "../../hooks/useProducts";
import Products from "../Products/Products";
import Categories from "./Category/Categories";
import SearchBar from "./SearchBar";

export default function Home() {
  useProducts();

  const { loading, error, products } = useSelector((state) => state.products);

  return (
    <div>
      <SearchBar />
      <Categories />
      <Products products={products} loading={loading} error={error} />
    </div>
  );
}
