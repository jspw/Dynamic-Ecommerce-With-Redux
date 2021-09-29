import { LazyLoadImage } from "react-lazy-load-image-component";
import { useDispatch } from "react-redux";
import {
  decreaseProductQuantity,
  increaseProductQuantity,
  removeProductFromCart,
} from "../../redux/actions/cartActions";

export default function CartItem({ product }) {
  const dispatch = useDispatch();
  return (
    <div className="flex flex-row justify-between items-center m-2 p-2 shadow">
      <div className="flex flex-row space-x-2 items-center justify-around align-center">
        <div>
          <LazyLoadImage
            src={product.image}
            effect="blur"
            width="64px"
            height="64px"
            className="rounded-lg p-1 w-16 h-16 object-fill"
          />
        </div>

        <div className="space-y-2">
          <div></div>
          <div className="text-sm text-gray-500 font-serif">
            {product.title}
          </div>

          <div className="flex flex-row space-x-1 text-sm font-medium">
            <div className="">${product.price}</div>
            <div>x</div> <div>{product.quantity}</div>
          </div>
          <div className="flex flex-row space-x-2 text-sm items-baseline">
            <button
              onClick={() => dispatch(decreaseProductQuantity(product.id))}
              className="border text-lg pl-3 pr-3"
            >
              -
            </button>
            <div>{product.quantity}</div>
            <button
              onClick={() => dispatch(increaseProductQuantity(product.id))}
              className="border text-lg pl-3 pr-3"
            >
              +
            </button>
          </div>
        </div>
      </div>
      <div>
        <button onClick={() => dispatch(removeProductFromCart(product.id))}>
          <i className="fa fa-trash text-red-600 p-2"></i>
        </button>
      </div>
    </div>
  );
}
