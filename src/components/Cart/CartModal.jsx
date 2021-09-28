import { useState } from "react";
import CartItems from "./CartItems";
import CancelIcon from "@mui/icons-material/Cancel";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { hideModal } from "../../redux/actions/modalActions";
import { clearCart } from "../../redux/actions/cartActions";

export default function CartModal() {
  const { totalProducts, payableAmount, totalQuantity } = useSelector(
    (state) => state.cart
  );
  const { isModalVisible } = useSelector((state) => state.modal);

  const dispatch = useDispatch();

  return (
    <div
      id="modal"
      className={`${
        isModalVisible ? " translate-x-0" : "translate-x-full"
      } fixed z-50 right-0 top-0 h-full w-full bg-gray-500 bg-opacity-30  animate-fadeIn transform duration-500`}
    >
      <div className="fixed right-0 bg-white  h-full overflow-y-auto duration-500 animate-slideIn flex flex-col justify-between  sm:w-full md:w-2/5 lg:w-4/12 xl:w-1/4 ">
        <div>
          <div className="sticky top-0 bg-gray-200 z-40 ">
            <div className="flex flex-row justify-between items-center ">
              <div className="p-4 flex flex-row items-center space-x-2">
                <LocalMallIcon />
                <div className="text-lg font-semibold">
                  {totalProducts} items
                </div>
              </div>
              <div>
                <button
                  onClick={() => dispatch(hideModal())}
                  className="btn btn-close p-4 text-xl text-gray-400"
                >
                  <CancelIcon htmlColor="white" />
                </button>
              </div>
            </div>
            <hr />
          </div>
          <CartItems />
        </div>

        {totalProducts > 0 ? (
          <div className="flex flex-col bg-white sticky bottom-0 border-2 p-2 shadow-md">
            <div className="flex flex-row justify-between m-2 p-1">
              <p className="text-yellow-900 font-medium">Payable Amount : </p>
              <p className="font-bold text-yellow-900">
                $ {Math.round(payableAmount)}
              </p>
            </div>

            <hr />

            <div className="m-2 flex flex-row justify-between">
              <button
                onClick={() => dispatch(clearCart())}
                className=" text-center font-serif text-base btn bg-red-400  text-white p-2 rounded"
              >
                Clear Cart
              </button>
              <Link
                onClick={() => dispatch(hideModal())}
                to={{
                  pathname: "/checkout",
                  order: {
                    totalItems: totalQuantity,
                    subTotal: 0,
                    payableAmount: Math.round(payableAmount),

                    discount: 100,
                  },
                }}
                className=" text-center font-serif text-lg btn bg-blue-400  text-white p-2 rounded"
              >
                Checkout
              </Link>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
