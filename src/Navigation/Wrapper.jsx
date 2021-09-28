import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";

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
