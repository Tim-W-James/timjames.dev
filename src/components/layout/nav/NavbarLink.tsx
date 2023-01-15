import { useTouchInputQuery } from "@hooks/useMediaQuery";
import { cnScoped } from "@styles/cssUtils";
import { setMouseHoverCssProperties } from "@utils/mouseHover";
import { isSafari } from "react-device-detect";
import { Link, useLocation } from "react-router-dom";
import styles from "./NavbarLink.module.scss";

/**
 * Link in the navbar
 *
 * @param {{ label; to; order; isSelected; inHamburgerMenu; }} { label text,
 * route, order for sorting, whether the link is selected, use a dropdown menu
 * style }
 */
const NavbarLink: React.FC<{
  label: string;
  to?: string;
  order: 1 | 2 | 3 | 4 | 5;
  isSelected?: boolean;
  inHamburgerMenu?: boolean;
}> = ({ label, to: route, order, isSelected, inHamburgerMenu }) => {
  const location = useLocation();
  const deviceIsTouch = useTouchInputQuery();

  return (
    <Link
      className={cnScoped(styles)(
        "subtitle px-8 py-2",
        styles._navbarLink,
        {
          [styles._selected]: location.pathname === route || !!isSelected,
        },
        inHamburgerMenu ? styles[`_dropdownItem${order}`] : "",
        // Animation doesn't work with Safari
        { [styles._safari]: isSafari }
      )}
      onClick={() =>
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }, 0)
      }
      onMouseMove={(e) => setMouseHoverCssProperties(e, true, deviceIsTouch)}
      to={route || "/"}
      type="button"
    >
      {label}
    </Link>
  );
};

export default NavbarLink;
