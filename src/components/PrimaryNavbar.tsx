import logo from "@assets/logo.svg";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

const PrimaryNavbar: React.FC = () => (
  <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
    <Container>
      <Navbar.Brand as={Link} to="/">
        <img
          alt=""
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{" "}
        project_title
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Link className="nav-link" to="/">
            Home
          </Link>
          <Link className="nav-link" to="/form">
            Example Form
          </Link>
          <NavDropdown
            title="Dropdown"
            id="basic-nav-dropdown"
            menuVariant="dark"
          >
            <Link className="dropdown-item" to="dropdown/1">
              Action
            </Link>
            <Link className="dropdown-item" to="dropdown/2">
              Another Action
            </Link>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default PrimaryNavbar;
