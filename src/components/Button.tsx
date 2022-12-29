import { useTouchInputQuery } from "@hooks/useMediaQuery";
import cn, { cnScoped } from "@styles/cssUtils";
import { setMouseHoverCssProperties } from "@utils/mouseHover";
import { Link } from "react-router-dom";
import styles, { ClassNames } from "./Button.module.scss";

/**
 * Description placeholder
 *
 * @param {{ to; label; tooltip; icon; linkIsRoute; isLight; isLabelHidden; }} {
  link,
  label text,
  tooltip text when hovering over button,
  icon,
  whether the link is a local route or external link,
  use light theme,
  hide the label text,
}
 */
const Button: React.FC<{
  to: string;
  label?: string;
  tooltip?: string;
  icon?: JSX.Element;
  linkIsRoute?: boolean;
  isLight?: boolean;
  isLabelHidden?: boolean;
}> = ({
  to: link,
  label,
  tooltip,
  icon,
  linkIsRoute,
  isLight,
  isLabelHidden,
}) => {
  const deviceIsTouch = useTouchInputQuery();

  const className = cnScoped<ClassNames>()(
    styles._acrylicButton,
    label && !isLabelHidden ? "px-8" : "px-4 h-fit",
    isLight ? "acrylic-light" : "acrylic-dark",
    isLight ? styles._light : styles._dark
  );

  const inner = (
    <span className={cn("flex items-center")}>
      {!isLabelHidden ? (icon && label ? `${label}\u00A0` : label) : null}
      {icon}
    </span>
  );

  return linkIsRoute ? (
    <Link
      aria-label={label}
      className={className}
      onMouseMove={(e) => setMouseHoverCssProperties(e, false, deviceIsTouch)}
      title={label && tooltip}
      to={link}
      type="button"
    >
      {inner}
    </Link>
  ) : (
    <a
      aria-label={label}
      className={className}
      href={link}
      onMouseMove={(e) => setMouseHoverCssProperties(e, false, deviceIsTouch)}
      rel="noreferrer"
      target="_blank"
      title={label && tooltip}
      type="button"
    >
      {inner}
    </a>
  );
};

export default Button;
