import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { useDispatch, useSelector } from "react-redux";

import {
  addProduct,
  decreaseProductQuantity,
  increaseProductQuantity,
} from "../../../redux/actions/cartActions";

export default function CartAction({ product }) {
  const dispatch = useDispatch();

  const { products } = useSelector((state) => state.cart);
  return (
    <div className="flex flex-col  justify-center ">
      {products[product.id] ? (
        <div className="flex flex-row justify-between border rounded-md p-2 bg-blue-400 items-baseline">
          <button
            className="btn text-white border border-transparent hover:border-white"
            onClick={() => dispatch(decreaseProductQuantity(product.id))}
          >
            <RemoveIcon />
          </button>
          <p className="text-white font-medium">
            {products[product.id].quantity} in cart
          </p>
          <button
            onClick={() => dispatch(increaseProductQuantity(product.id))}
            className="btn text-white border border-transparent  hover:border-white"
          >
            <AddIcon />
          </button>
        </div>
      ) : (
        <button
          onClick={() => dispatch(addProduct(product))}
          className="btn text-blue-400 border rounded-md p-2 flex
    items-baseline justify-center space-x-2 "
        >
          <i className="fa fa-shopping-bag "></i>
          <p> Add to Cart</p>
        </button>
      )}
    </div>
  );
}
