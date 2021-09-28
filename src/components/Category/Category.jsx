import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Products from "../Products/Products";
import { useSelector } from "react-redux";

export default function Category() {
  const { category } = useParams();
  const {
    products: allProducts,
    error,
    loading,
  } = useSelector((state) => state.products);

  const products = allProducts.filter(
    (product) => product.category === category
  );

  return (
    <div>
      <div className=" font-medium  flex flex-row space-x-2 mt-2  ml-5 mb-2">
        <Link to="/" className="text-black hover:text-blue-600">
          Home
        </Link>
        <p className="text-blue-300">/</p>
        <p className="text-gray-400">{category}</p>
      </div>
      <Products products={products} loading={loading} error={error} />
    </div>
  );
}
