import Footer from "@components/layout/Footer";
import Navbar from "@layout/Navbar";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";

const App = () => (
  <>
    <Navbar />
    <Container className="mt-3">
      <Outlet />
    </Container>
    <Footer />
  </>
);

export default App;
