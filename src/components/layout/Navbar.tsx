import logo from "@assets/svg/logo.svg";
import { Container, Nav, Navbar as BSNavbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => (
  <BSNavbar bg="dark" expand="lg" sticky="top" variant="dark">
    <Container>
      <BSNavbar.Brand as={Link} to="/">
        <img
          alt=""
          className="d-inline-block align-top"
          height="30"
          src={logo}
          width="30"
        />{" "}
        Tim James
      </BSNavbar.Brand>
      <BSNavbar.Toggle aria-controls="basic-navbar-nav" />
      <BSNavbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Link className="nav-link" to="/">
            Home
          </Link>
        </Nav>
      </BSNavbar.Collapse>
    </Container>
  </BSNavbar>
);

export default Navbar;
