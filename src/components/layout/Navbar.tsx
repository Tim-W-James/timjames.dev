import "./Navbar.scss";
import NavbarButton from "./NavbarButton";

const Navbar: React.FC = () => (
  <div
    className={
      "custom-navbar glass-morphism-dark background-blur-strong " +
      "radial-gradient-border"
    }
  >
    <NavbarButton label="Tim James" />
    <div className="navbar-links">
      <NavbarButton label="Home" />
      <NavbarButton label="Projects" />
      <NavbarButton label="Blog" />
    </div>
  </div>
);

export default Navbar;
