import { useEffect } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import Router from "../../Navigation/Router";
import { persistor, store } from "../../redux/store/store";
import { fetchProducts } from "../../redux/actions/productActions";

export default function Wrapper() {
  useEffect(() => {
    if (!store.getState().user.isUserOld) {
      store.dispatch(fetchProducts());
    }
  });

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router />
      </PersistGate>
    </Provider>
  );
}
