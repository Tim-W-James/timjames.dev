import logo from "@assets/logo.png";
import { BLOG, HOME, PROJECTS } from "@constants/routes";
import useMediaQuery from "@hooks/useMediaQuery";
import cn from "@styles/cssUtils";
import ClickAwayListener from "react-click-away-listener";
import { useLocation } from "react-router-dom";
import MenuToggle from "./MenuToggle";
import styles, { ClassNames } from "./Navbar.module.scss";
import NavbarBrand from "./NavbarBrand";
import NavbarLink from "./NavbarLink";

const Navbar: React.FC = () => {
  const location = useLocation();
  const [hamburgerMenuIsOpen, openHamburgerMenu] = useState(false);
  const shouldUseHamburgerMenu = useMediaQuery("(min-width: 900px)");

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
    <div
      className={
        "flex flex-row " +
        cn<ClassNames>()(
          styles._navbar,
          "items-center justify-between fixed z-10 top-0 left-0  w-screen"
        )
      }
    >
      {navbarBrand}
      <div className={cn()("flex justify-around")}>{navbarItems}</div>
    </div>
  ) : (
    <ClickAwayListener onClickAway={() => openHamburgerMenu(false)}>
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
          {navbarBrand}
          <MenuToggle
            baseColor="hsl(185deg 46% 52%)"
            hoverColor="hsl(180deg 5% 91%)"
            isOpen={hamburgerMenuIsOpen}
            toggle={() => openHamburgerMenu(!hamburgerMenuIsOpen)}
          />
        </div>

        <div className={cn<ClassNames>()(styles._navbarMenu)}>
          {hamburgerMenuIsOpen ? navbarItems : null}
        </div>
      </div>
    </ClickAwayListener>
  );
};

export default Navbar;
