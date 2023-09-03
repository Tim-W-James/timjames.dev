import { BLOG, CONTACT, HOME, PROJECTS } from "@constants/routes";
import useMediaQuery from "@hooks/useMediaQuery";
import logo from "@images/logo.png";
import cn, { cnScoped } from "@styles/cssUtils";
import { Suspense } from "react";
import ClickAwayListener from "react-click-away-listener";
import { useLocation } from "react-router-dom";

import styles from "./Navbar.module.scss";
import NavbarBrand from "./NavbarBrand";
import NavbarLink from "./NavbarLink";
const MenuToggle = lazy(() => import("./MenuToggle"));

/**
 * Responsive nav bar
 */
const Navbar: React.FC = () => {
  const location = useLocation();
  const [hamburgerMenuIsOpen, openHamburgerMenu] = useState(false);
  const shouldUseHamburgerMenu = useMediaQuery("(max-width: 1050px)");

  const navbarItems = (
    <>
      <NavbarLink
        inHamburgerMenu={hamburgerMenuIsOpen}
        isSelected={HOME.routes.includes(location.pathname)}
        label="Home"
        order={1}
        to={HOME.routes[0]}
      />
      <NavbarLink
        inHamburgerMenu={hamburgerMenuIsOpen}
        isSelected={PROJECTS.routes.includes(location.pathname)}
        label="Projects"
        order={2}
        to={PROJECTS.routes[0]}
      />
      <NavbarLink
        inHamburgerMenu={hamburgerMenuIsOpen}
        isSelected={BLOG.routes.some((route) =>
          location.pathname.startsWith(route)
        )}
        label="Blog"
        order={3}
        to={BLOG.routes[0]}
      />
      <NavbarLink
        inHamburgerMenu={hamburgerMenuIsOpen}
        isSelected={CONTACT.routes.some((route) =>
          location.pathname.startsWith(route)
        )}
        label="Contact"
        order={4}
        to={CONTACT.routes[0]}
      />
    </>
  );

  const navbarBrand = <NavbarBrand label="TimJames.dev" logo={logo} to="/" />;

  useEffect(() => {
    openHamburgerMenu(false);
  }, [location]);

  const closeHamburgerMenu = useCallback(() => openHamburgerMenu(false), []);
  const toggleHamburgerMenu = useCallback(
    () => openHamburgerMenu(!hamburgerMenuIsOpen),
    [hamburgerMenuIsOpen]
  );

  return shouldUseHamburgerMenu ? (
    <ClickAwayListener onClickAway={closeHamburgerMenu}>
      <nav className={cn("sticky left-0 top-0 z-[100]")}>
        <div
          className={cnScoped(styles)(
            "flex justify-between w-screen content-center items-center py-2",
            "flex-row",
            styles._navbar
          )}
        >
          {navbarBrand}
          <Suspense>
            <MenuToggle
              baseColor="hsl(185deg 46% 52%)"
              hoverColor="hsl(180deg 5% 91%)"
              isOpen={hamburgerMenuIsOpen}
              toggle={toggleHamburgerMenu}
            />
          </Suspense>
        </div>

        <div className={cnScoped(styles)(styles._navbarMenu)}>
          {hamburgerMenuIsOpen ? navbarItems : null}
        </div>
      </nav>
    </ClickAwayListener>
  ) : (
    <nav
      className={cnScoped(styles)(
        styles._navbar,
        "w-screen sticky top-0 left-0 z-50"
      )}
    >
      <div className={cn("container mx-auto")}>
        <div className={cn("flex items-center justify-between", "flex-row")}>
          {navbarBrand}
          <div className={cn("flex justify-around")}>{navbarItems}</div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
