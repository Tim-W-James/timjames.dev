import Footer from "@layout/Footer";
import Navbar from "@layout/nav/Navbar";
import { Outlet } from "react-router-dom";

const App = () => (
  <>
    <Navbar />
    <Outlet />
    <Footer allowFixed />
  </>
);

export default App;
