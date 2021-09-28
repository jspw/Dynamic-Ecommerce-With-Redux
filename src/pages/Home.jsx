import { Fragment } from "react";
import { useSelector } from "react-redux";
import Products from "../components/Products/Products";
import Categories from "../components/Category/Categories";
import SearchBar from "../components/SearchBar/SearchBar";

export default function Home() {
  const { loading, error, products } = useSelector((state) => state.products);

  return (
    <Fragment>
      <SearchBar />
      <Categories />
      <Products products={products} loading={loading} error={error} />
    </Fragment>
  );
}
