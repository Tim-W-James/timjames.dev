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
  mode is a route or anchor or button,
  use light theme,
  hide the label text,
}
 */
const button: React.FC<{
  to?: string;
  label?: string;
  tooltip?: string;
  icon?: JSX.Element;
  mode?: "route" | "anchor" | "button";
  isLight?: boolean;
  isLabelHidden?: boolean;
  onClick?: () => void;
}> = ({
  to: link,
  label,
  tooltip,
  icon,
  mode,
  isLight,
  isLabelHidden,
  onClick,
}) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
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

  switch (mode) {
    case "route":
      return (
        <Link
          aria-label={label}
          className={className}
          onClick={onClick}
          onMouseMove={(e) =>
            setMouseHoverCssProperties(e, false, deviceIsTouch)
          }
          title={label && tooltip}
          to={link || "/"}
          type="button"
        >
          {inner}
        </Link>
      );

    case "button":
      return (
        <button
          aria-label={label}
          className={className}
          onClick={onClick}
          onMouseMove={(e) =>
            setMouseHoverCssProperties(e, false, deviceIsTouch)
          }
          title={label && tooltip}
          type="button"
        >
          {inner}
        </button>
      );

    default:
      return (
        <a
          aria-label={label}
          className={className}
          href={link || "/"}
          onClick={onClick}
          onMouseMove={(e) =>
            setMouseHoverCssProperties(e, false, deviceIsTouch)
          }
          rel="noreferrer"
          target="_blank"
          title={label && tooltip}
          type="button"
        >
          {inner}
        </a>
      );
  }
};

export default button;
