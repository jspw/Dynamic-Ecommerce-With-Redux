import Address from "../components/Checkout/Address";
import OrderPreview from "../components/Checkout/OrderPreview";

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
