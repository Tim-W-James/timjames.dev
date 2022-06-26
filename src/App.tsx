import PrimaryFooter from "@components/PrimaryFooter";
import PrimaryNavbar from "@components/PrimaryNavbar";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";

const App = () => (
  <>
    <PrimaryNavbar />
    <Container className="mt-3">
      <Outlet />
    </Container>
    <PrimaryFooter />
  </>
);

export default App;
