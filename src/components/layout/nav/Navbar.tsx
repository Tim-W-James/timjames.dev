import { useLocation } from "react-router-dom";
import "./Navbar.scss";
import NavbarLink from "./NavbarLink";

const Navbar: React.FC = () => {
  const location = useLocation();

  return (
    <div
      className={
        "navbar glass-morphism-dark background-blur-strong " +
        "radial-gradient-underline"
      }
    >
      <NavbarLink label={"Tim James"} to="/" />
      <div className="navbar-links">
        <NavbarLink
          isSelected={location.pathname === "/"}
          label="Home"
          to="/"
        />
        <NavbarLink label="Projects" to="/projects" />
        <NavbarLink label="Blog" to="/blog" />
      </div>
    </div>
  );
};

export default Navbar;
