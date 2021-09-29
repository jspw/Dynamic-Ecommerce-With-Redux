import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/actions/productActions";

export default function Wrapper() {
  const { isUserOld } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  if (!isUserOld) dispatch(fetchProducts());

  return (
    <BrowserRouter>
      <div className=" flex flex-col justify-between h-screen">
        <div>
          <NavBar />
          <AppRoutes />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
