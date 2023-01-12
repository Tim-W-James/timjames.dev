import { useTouchInputQuery } from "@hooks/useMediaQuery";
import cn, { cnScoped } from "@styles/cssUtils";
import { setMouseHoverCssProperties } from "@utils/mouseHover";
import { isSafari } from "react-device-detect";
import { Link } from "react-router-dom";
import styles, { ClassNames } from "./Button.module.scss";

export interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  to?: string;
  label?: string;
  tooltip?: string;
  icon?: JSX.Element;
  mode?: "route" | "anchor" | "button";
  isLight?: boolean;
  isLabelHidden?: boolean;
  iconRight?: boolean;
  disabled?: boolean;
  className?: string;
}

/**
 * Custom button component
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
// eslint-disable-next-line sonarjs/cognitive-complexity
const Button = (props: ButtonProps) => {
  const {
    to: link,
    label,
    tooltip,
    icon,
    mode,
    isLight,
    isLabelHidden,
    iconRight,
    disabled,
    className: additionalClassName,
    ...buttonProps
  } = props;
  const deviceIsTouch = useTouchInputQuery();

  const className = cnScoped<ClassNames>()(
    styles._acrylicButton,
    label && !isLabelHidden ? "px-8" : "px-4 h-fit",
    isLight && !disabled ? "acrylic-light" : "acrylic-dark",
    isLight && !disabled ? styles._light : styles._dark,
    // Radial border doesn't work with Safari
    { [styles._safari]: isSafari }
  );

  const inner = (
    <span className={cn("flex gap-2 items-center justify-between")}>
      {iconRight ? (
        <>
          {!isLabelHidden ? label : null}
          {icon}
        </>
      ) : (
        <>
          {icon}
          {!isLabelHidden ? label : null}
        </>
      )}
    </span>
  );

  switch (mode) {
    case "route":
      return (
        <Link
          aria-label={label}
          className={
            className + (additionalClassName ? " " + additionalClassName : "")
          }
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
          className={
            className + (additionalClassName ? " " + additionalClassName : "")
          }
          disabled={disabled}
          onMouseMove={(e) =>
            setMouseHoverCssProperties(e, false, deviceIsTouch)
          }
          title={label && tooltip}
          type="button"
          {...buttonProps}
        >
          {inner}
        </button>
      );

    default:
      return (
        <a
          aria-label={label}
          className={className + " " + additionalClassName}
          href={link || "/"}
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

export default Button;
