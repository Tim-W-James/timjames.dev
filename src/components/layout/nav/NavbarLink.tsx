import cn from "@styles/cssUtils";
import { setMouseHoverCssProperties } from "@utils/mouseHover";
import { useLocation, useNavigate } from "react-router-dom";
import { ClassNames } from "./NavbarLink.module.scss";

const NavbarLink: React.FC<{
  label: string;
  to: string;
  isSelected?: boolean;
}> = ({ label, to: route, isSelected }) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <button
      className={cn<ClassNames>()("_navbarLink", {
        _selected: location.pathname === route || !!isSelected,
      })}
      onClick={() => navigate(route)}
      onMouseMove={(e) => setMouseHoverCssProperties(e, true)}
      type="button"
    >
      {label}
    </button>
  );
};

export default NavbarLink;
