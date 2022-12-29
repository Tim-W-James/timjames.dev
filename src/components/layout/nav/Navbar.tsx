import logo from "@assets/logo.png";
import { BLOG, HOME, PROJECTS } from "@constants/routes";
import useMediaQuery from "@hooks/useMediaQuery";
import cn, { cnScoped } from "@styles/cssUtils";
import ClickAwayListener from "react-click-away-listener";
import { useLocation } from "react-router-dom";
import MenuToggle from "./MenuToggle";
import styles, { ClassNames } from "./Navbar.module.scss";
import NavbarBrand from "./NavbarBrand";
import NavbarLink from "./NavbarLink";

/**
 * Responsive nav bar
 */
const Navbar: React.FC = () => {
  const location = useLocation();
  const [hamburgerMenuIsOpen, openHamburgerMenu] = useState(false);
  const shouldUseHamburgerMenu = useMediaQuery("(max-width: 900px)");

  const navbarItems = (
    <>
      <NavbarLink
        inHamburgerMenu={hamburgerMenuIsOpen}
        isSelected={HOME.includes(location.pathname)}
        label="Home"
        order={1}
        to="/"
      />
      <NavbarLink
        inHamburgerMenu={hamburgerMenuIsOpen}
        label="Projects"
        order={2}
        to={PROJECTS}
      />
      <NavbarLink
        inHamburgerMenu={hamburgerMenuIsOpen}
        label="Blog"
        order={3}
        to={BLOG}
      />
    </>
  );

  const navbarBrand = <NavbarBrand label={"TimJames.dev"} logo={logo} to="/" />;

  useEffect(() => {
    openHamburgerMenu(false);
  }, [location]);

  return shouldUseHamburgerMenu ? (
    <ClickAwayListener onClickAway={() => openHamburgerMenu(false)}>
      <div className={cn("fixed z-10 top-0 left-0")}>
        <div
          className={cnScoped<ClassNames>()(
            "flex justify-between w-screen content-center items-center py-2",
            "flex-row",
            styles._navbar
          )}
        >
          {navbarBrand}
          <MenuToggle
            baseColor="hsl(185deg 46% 52%)"
            hoverColor="hsl(180deg 5% 91%)"
            isOpen={hamburgerMenuIsOpen}
            toggle={() => openHamburgerMenu(!hamburgerMenuIsOpen)}
          />
        </div>

        <div className={cnScoped<ClassNames>()(styles._navbarMenu)}>
          {hamburgerMenuIsOpen ? navbarItems : null}
        </div>
      </div>
    </ClickAwayListener>
  ) : (
    <div
      className={cnScoped<ClassNames>()(
        styles._navbar,
        "w-screen fixed z-10 top-0 left-0"
      )}
    >
      <div className={cn("container mx-auto")}>
        <div className={cn("flex items-center justify-between", "flex-row")}>
          {navbarBrand}
          <div className={cn("flex justify-around")}>{navbarItems}</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
