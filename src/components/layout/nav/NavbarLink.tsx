import { setMouseHoverCssProperties } from "@utils/mouseHover";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./NavbarLink.module.scss";

const NavbarLink: React.FC<{
  label: string;
  to: string;
  isSelected?: boolean;
}> = ({ label, to: route, isSelected }) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <button
      className={`${styles.navbarLink} ${
        location.pathname === route || isSelected ? styles.selected : ""
      }`}
      onClick={() => navigate(route)}
      onMouseMove={(e) => setMouseHoverCssProperties(e)}
      type="button"
    >
      {label}
    </button>
  );
};

export default NavbarLink;
