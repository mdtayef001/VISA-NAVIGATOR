import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const HomeLayout = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default HomeLayout;
