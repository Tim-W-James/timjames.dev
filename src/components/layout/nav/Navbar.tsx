import cn from "@styles/cssUtils";
import { useLocation } from "react-router-dom";
import styles, { ClassNames } from "./Navbar.module.scss";
import NavbarLink from "./NavbarLink";

const Navbar: React.FC = () => {
  const location = useLocation();

  return (
    <div className={cn<ClassNames>()(styles._navbar)}>
      <NavbarLink label={"TimJames.dev"} to="/" />
      <div className={cn<ClassNames>()("flex justify-around")}>
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
