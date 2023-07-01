import { Outlet } from "react-router-dom";
import NavBar from "../Pages/Shared/NavBar/NavBar";
import Footer from "../Pages/Shared/Footer/Footer";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Main = () => {
  useEffect(() => {
    Aos.init(2000);
  }, []);
  return (
    <div>
      <div className="mb-24">
        <NavBar></NavBar>
      </div>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
