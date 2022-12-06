import { useLocation } from "react-router-dom";
import styles from "./Navbar.module.scss";
import NavbarLink from "./NavbarLink";

const Navbar: React.FC = () => {
  const location = useLocation();

  return (
    <div
      className={
        styles.navbar +
        " " +
        "glass-morphism-dark" +
        " " +
        "background-blur-strong" +
        " " +
        "radial-gradient-underline"
      }
    >
      <NavbarLink label={"Tim James"} to="/" />
      <div className={styles.navbarLinks}>
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
