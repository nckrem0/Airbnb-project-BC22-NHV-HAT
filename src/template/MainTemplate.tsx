import Footer from "component/Footer";
import { Outlet } from "react-router-dom";
import Header from "../component/Header";

const MainTemplate = () => {
  return (
    <div className="flex h-screen flex-col font-montserrat">
      {/* Header  */}
      {/* <Header /> */}
      {/* Body  */}
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainTemplate;
