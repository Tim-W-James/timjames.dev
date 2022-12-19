import { useTouchInputQuery } from "@hooks/useMediaQuery";
import cn from "@styles/cssUtils";
import { setMouseHoverCssProperties } from "@utils/mouseHover";
import { Link } from "react-router-dom";
import styles, { ClassNames } from "./Button.module.scss";

const Button: React.FC<{
  to: string;
  label?: string;
  icon?: JSX.Element;
  linkIsRoute?: boolean;
  isLight?: boolean;
}> = ({ to: link, label, icon, linkIsRoute, isLight }) => {
  const deviceIsTouch = useTouchInputQuery();

  const className = cn<ClassNames>()(
    styles._acrylicButton,
    label ? "px-8" : "px-4 h-fit",
    isLight ? "acrylic-light" : "acrylic-dark",
    isLight ? styles._light : styles._dark
  );

  const inner = (
    <span className={cn()("flex items-center")}>
      {icon && label ? `${label}\u00A0` : label}
      {icon}
    </span>
  );

  return linkIsRoute ? (
    <Link
      className={className}
      onMouseMove={(e) => setMouseHoverCssProperties(e, false, deviceIsTouch)}
      rel="noreferrer"
      to={link}
      type="button"
    >
      {inner}
    </Link>
  ) : (
    <a
      className={className}
      href={link}
      onMouseMove={(e) => setMouseHoverCssProperties(e, false, deviceIsTouch)}
      rel="noreferrer"
      target="_blank"
      type="button"
    >
      {inner}
    </a>
  );
};

export default Button;
