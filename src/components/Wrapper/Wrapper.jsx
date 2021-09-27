import { Provider } from "react-redux";
import CartContextProvider from "../../Context/CartContext";
import CategoryContextProvider from "../../Context/CategoryContext";
import ModalContextProvider from "../../Context/ModalContext";
import ShopContextProvider from "../../Context/ShopContext";
import Router from "../../Navigation/Router";
import store from "../../redux/store/store";

export default function Wrapper() {
  return (
    <ModalContextProvider>
      <Provider store={store}>
        <CartContextProvider>
          <CategoryContextProvider>
            <ShopContextProvider>
              <Router />
            </ShopContextProvider>
          </CategoryContextProvider>
        </CartContextProvider>
      </Provider>
    </ModalContextProvider>
  );
}
