import { useLocation, useNavigate } from "react-router-dom";
import "./NavbarLink.scss";

const mousePercent = (
  e: React.MouseEvent<HTMLButtonElement>,
  coordinate: "X" | "Y"
): number =>
  ((e[`page${coordinate}`] -
    e.currentTarget[`offset${coordinate === "X" ? "Left" : "Top"}`] -
    (coordinate === "Y" ? window.scrollY : 0)) /
    e.currentTarget[`client${coordinate === "X" ? "Width" : "Height"}`]) *
  100;

const NavbarLink: React.FC<{
  label: string;
  to: string;
  isSelected?: boolean;
}> = ({ label, to: route, isSelected }) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <button
      className={location.pathname === route || isSelected ? "selected" : ""}
      onClick={() => navigate(route)}
      onMouseMove={(e) => {
        const horizontalPercent = mousePercent(e, "X");
        const verticalPercent = mousePercent(e, "Y");
        const mouseDegFromCenter =
          (Math.atan((-50 + horizontalPercent) / (50 - verticalPercent)) *
            180) /
          3.14;
        e.currentTarget.style.setProperty(
          "--mouse-x",
          `${horizontalPercent.toFixed(2)}%`
        );
        e.currentTarget.style.setProperty(
          "--mouse-y",
          `${verticalPercent.toFixed(2)}%`
        );
        e.currentTarget.style.setProperty(
          "--mouse-deg",
          `${(verticalPercent > 50
            ? mouseDegFromCenter
            : mouseDegFromCenter < 0
            ? 180 - Math.abs(mouseDegFromCenter)
            : -(180 - Math.abs(mouseDegFromCenter))
          ).toFixed(2)}deg`
        );
      }}
      type="button"
    >
      {label}
    </button>
  );
};

export default NavbarLink;
