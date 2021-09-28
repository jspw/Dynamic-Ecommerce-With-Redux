import CartItem from "./CartItem";
import shoppingIcon from "../../assets/images/shopping.png";
import { useSelector } from "react-redux";

export default function CartItems() {
  const { products, totalProducts } = useSelector((state) => state.cart);

  return totalProducts ? (
    <div className="flex flex-col space-y-2">
      {Object.values(products).map((product) => {
        console.log();
        return <CartItem key={product.id} product={product} />;
      })}
    </div>
  ) : (
    <div className="container flex flex-col space-y-2 items-center justify-center  ">
      <img src={shoppingIcon} alt="Icon" className="rounded-full h-48 w-48" />
      <p className="text-gray-500 p-2">Your cart is empty. Start shopping</p>
    </div>
  );
}
