import { useSelector } from "react-redux";
import Products from "../Products/Products";
import Categories from "./Category/Categories";
import SearchBar from "./SearchBar";

export default function Home() {
  const { loading, error, products } = useSelector((state) => state.products);

  return (
    <div>
      <SearchBar />
      <Categories />
      <Products products={products} loading={loading} error={error} />
    </div>
  );
}
