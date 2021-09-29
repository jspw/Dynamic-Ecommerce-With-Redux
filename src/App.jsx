import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./redux/store/store";
import Wrapper from "./Navigation/Wrapper";

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Wrapper />
      </PersistGate>
    </Provider>
  );
}
