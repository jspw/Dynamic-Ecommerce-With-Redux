import { Link } from "react-router-dom";
import Address from "./Address";
import OrderPreview from "./OrderPreview";
import { useDispatch } from "react-redux";
import { clearCart } from "../../redux/actions/cartActions";

export default function Checkout() {
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-row justify-center  sm:flex-col xs:flex-col">
        <OrderPreview />
        <Address />
      </div>

      <Link
        onClick={() => dispatch(clearCart())}
        to={{
          pathname: "/order-complete",
          done: "done",
        }}
        className="btn bg-blue-500 text-white p-1  shadow text-center"
      >
        Place Order
      </Link>
    </div>
  );
}
