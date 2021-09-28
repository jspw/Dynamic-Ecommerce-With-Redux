import { useEffect } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./redux/store/store";
import { fetchProducts } from "./redux/actions/productActions";
import Wrapper from "./Navigation/Wrapper";

export default function App() {
  useEffect(() => {
    if (!store.getState().user.isUserOld) {
      store.dispatch(fetchProducts());
    }
  });

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Wrapper />
      </PersistGate>
    </Provider>
  );
}
