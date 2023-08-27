import { useTouchInputQuery } from "@hooks/useMediaQuery";
import { cnScoped } from "@styles/cssUtils";
import { setMouseHoverCssProperties } from "@utils/mouseHover";
import { isMobileSafari, isSafari } from "react-device-detect";
import { Link, useLocation } from "react-router-dom";

import styles from "./NavbarLink.module.scss";

type NavbarLinkProps = {
  label: string;
  to?: string;
  order: 1 | 2 | 3 | 4 | 5;
  isSelected?: boolean;
  inHamburgerMenu?: boolean;
};

const NavbarLink: React.FC<NavbarLinkProps> = ({
  label,
  to: route,
  order,
  isSelected,
  inHamburgerMenu,
}) => {
  const location = useLocation();
  const deviceIsTouch = useTouchInputQuery();
  const scrollToTop = useCallback(
    () =>
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 0),
    []
  );
  const mouseHoverEffects = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) =>
      setMouseHoverCssProperties(e, true, deviceIsTouch),
    [deviceIsTouch]
  );

  return (
    <Link
      className={cnScoped(styles)(
        "subtitle px-8 py-2",
        styles._navbarLink,
        {
          [styles._selected]:
            location.pathname === route || Boolean(isSelected),
        },
        inHamburgerMenu ? styles[`_dropdownItem${order}`] : "",
        // Animation doesn't work with Safari
        { [styles._safari]: isSafari || isMobileSafari }
      )}
      onClick={scrollToTop}
      onMouseMove={mouseHoverEffects}
      to={route ?? "/"}
      type="button"
    >
      {label}
    </Link>
  );
};

export default NavbarLink;
