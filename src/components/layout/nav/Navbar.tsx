import cn from "@styles/cssUtils";
import { useLocation } from "react-router-dom";
import { ClassNames } from "./Navbar.module.scss";
import NavbarLink from "./NavbarLink";

const Navbar: React.FC = () => {
  const location = useLocation();

  return (
    <div className={cn<ClassNames>()("_navbar")}>
      <NavbarLink label={"TimJames.dev"} to="/" />
      <div className={cn<ClassNames>()("_navbarLinks")}>
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
