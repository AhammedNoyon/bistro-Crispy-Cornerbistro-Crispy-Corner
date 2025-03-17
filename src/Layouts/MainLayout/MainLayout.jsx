import { Outlet } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";
import Footer from "../../Shared/Footer/Footer";

const MainLayout = () => {
  return (
    <div>
      <div className="mx-auto w-5/6">
        <Navbar />
      </div>
      <div>
        <Outlet></Outlet>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
