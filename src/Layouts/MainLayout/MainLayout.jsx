import { Outlet } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";

const MainLayout = () => {
  return (
    <div>
      <div className="w-3/4 mx-auto">
        <Navbar />
      </div>
      <div>
        <Outlet></Outlet>
      </div>
      <div>Footer</div>
    </div>
  );
};

export default MainLayout;
