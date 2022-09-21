import { Outlet } from "react-router-dom";
import { Sidebar } from "../Sidebar/Sidebar";
import { Navbar } from "../Navbar/Navbar";
import { Footer } from "../Footer/Footer";

const AppLayout = () => {
  return (
    <>
      <Navbar />
      <div className="wrapper">
        <Sidebar />
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export { AppLayout };
