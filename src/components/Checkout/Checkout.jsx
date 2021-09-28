import { Link } from "react-router-dom";
import Address from "./Address";
import OrderPreview from "./OrderPreview";
import { useDispatch } from "react-redux";
import { clearCart } from "../../redux/actions/cartActions";

export default function Checkout() {
  return (
    <div className="flex flex-col items-center align-center">
      <div className="flex flex-row justify-center  sm:flex-col xs:flex-col">
        <OrderPreview />
        <Address />
      </div>
    </div>
  );
}
