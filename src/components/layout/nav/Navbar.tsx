import brand from "@assets/brand.png";
import { BLOG, HOME, PROJECTS } from "@constants/routes";
import useMediaQuery from "@hooks/useMediaQuery";
import cn from "@styles/cssUtils";
import { useLocation } from "react-router-dom";
import MenuToggle from "./MenuToggle";
import styles, { ClassNames } from "./Navbar.module.scss";
import NavbarBrand from "./NavbarBrand";
import NavbarLink from "./NavbarLink";

const Navbar: React.FC = () => {
  const location = useLocation();
  const [isOpen, setOpen] = useState(false);
  const shouldShowHamburgerMenu = useMediaQuery("(min-width: 900px)");

  return shouldShowHamburgerMenu ? (
    <div
      className={
        "flex flex-row " +
        cn<ClassNames>()(
          styles._navbar,
          "items-center justify-between fixed z-10 top-0 left-0  w-screen"
        )
      }
    >
      <NavbarBrand label={"TimJames.dev"} logo={brand} to="/" />
      <div className={cn()("flex justify-around")}>
        <NavbarLink
          isSelected={location.pathname === "/"}
          label="Home"
          to="/"
        />
        <NavbarLink label="Projects" to="/projects" />
        <NavbarLink label="Blog" to="/blog" />
      </div>
    </div>
  ) : (
    <div className={cn()("fixed z-10 top-0 left-0")}>
      <div
        className={
          "flex flex-row " +
          cn<ClassNames>()(
            "justify-between w-screen content-center items-center py-2",
            styles._navbar
          )
        }
      >
        <NavbarBrand label={"TimJames.dev"} logo={brand} to="/" />
        <MenuToggle
          color="hsl(185deg 46% 52%)"
          isOpen={isOpen}
          toggle={() => setOpen(!isOpen)}
        />
      </div>

      <div
        className={
          "flex flex-col " + cn<ClassNames>()("text-center", styles._navbarMenu)
        }
      >
        {isOpen ? (
          <>
            <NavbarLink
              isSelected={HOME.includes(location.pathname)}
              label="Home"
              to="/"
            />
            <NavbarLink label="Projects" to={PROJECTS} />
            <NavbarLink label="Blog" to={BLOG} />
          </>
        ) : null}
      </div>
    </div>
  );
};

export default Navbar;
