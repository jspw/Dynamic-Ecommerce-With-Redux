import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { clearCart } from "../../redux/actions/cartActions";

export default function Address() {
  const dispatch = useDispatch();
  return (
    <div className="flex border flex-col justify-top items-center bg-white m-5 p-10 space-y-5 ">
      <div>
        <div className="text-xl font-serif font-semibold">Delivery Info</div>
        <hr />
      </div>

      <form className="flex flex-col space-y-2 p-2">
        <div className="flex flex-row items-center justify-between space-x-2 xs:flex-col xs:items-start xs:space-x-0 ">
          <label className="text-gray-500">Contact Name : </label>

          <input
            className="outline-none border p-1 rounded hover:border-blue-400 focus:shadow"
            placeholder="Contact Name"
            name="contactName"
          />
        </div>
        <div className="flex flex-row justify-between items-center space-x-2 xs:flex-col xs:items-start xs:space-x-0">
          <label className="text-gray-500">Contact Number : </label>

          <input
            className="outline-none border p-1 rounded hover:border-blue-400 focus:shadow"
            placeholder="Contact Number"
            enterKeyHint="+8801714986887"
            name="contactNumber"
          />
        </div>
        <div className="flex flex-row justify-between items-center space-x-2 xs:flex-col xs:items-start xs:space-x-0">
          <label className="text-gray-500">City : </label>

          <input
            className="outline-none border p-1 rounded hover:border-blue-400 focus:shadow"
            placeholder="City"
            name="city"
          />
        </div>

        <div className="flex flex-row justify-between items-center space-x-2 xs:flex-col xs:items-start xs:space-x-0">
          <label className="text-gray-500">Street : </label>

          <input
            className="outline-none border p-1 rounded hover:border-blue-400 focus:shadow"
            placeholder="Street"
            name="street"
          />
        </div>
        <div className="flex flex-row justify-between items-center space-x-2 xs:flex-col xs:items-start xs:space-x-0">
          <label className="text-gray-500">Zip Code : </label>

          <input
            className="outline-none border p-1 rounded hover:border-blue-400 focus:shadow"
            placeholder="Zip Code"
            name="zipCode"
          />
        </div>

        <div className="h-5"></div>

        <Link
          onClick={() => dispatch(clearCart())}
          to={{
            pathname: "/order-complete",
            done: "done",
          }}
          className="btn  container bg-blue-500 text-white p-1 mt-5 shadow text-center"
        >
          Place Order
        </Link>
      </form>
    </div>
  );
}
