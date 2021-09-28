import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import ModalContextProvider from "../../Context/ModalContext";
import Router from "../../Navigation/Router";
import { persistor, store } from "../../redux/store/store";

export default function Wrapper() {
  return (
    <ModalContextProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router />
        </PersistGate>
      </Provider>
    </ModalContextProvider>
  );
}
