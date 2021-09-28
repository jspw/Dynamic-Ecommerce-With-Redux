import { Switch, Route } from "react-router-dom";
import Category from "../pages/Category";
import Home from "../pages/Home";
import ProductDetail from "../pages/ProductDetail";
import Checkout from "../pages/Checkout";
import OrderSuccess from "../pages/OrderSuccess";
import Page404 from "../pages/Page404";

export default function AppRoutes() {
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/category/:category" exact>
        <Category />
      </Route>
      <Route path="/product/:title" exact>
        <ProductDetail />
      </Route>
      <Route path="/checkout" exact>
        <Checkout />
      </Route>
      <Route path="/order-complete" exact>
        <OrderSuccess />
      </Route>
      <Route path="*">
        <Page404 />
      </Route>
    </Switch>
  );
}
