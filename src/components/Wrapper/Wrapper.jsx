import { BrowserRouter } from "react-router-dom";
import AppRoutes from "../../Navigation/AppRoutes";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

export default function Wrapper() {
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
