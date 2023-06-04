import { useTouchInputQuery } from "@hooks/useMediaQuery";
import cn, { cnScoped } from "@styles/cssUtils";
import { setMouseHoverCssProperties } from "@utils/mouseHover";
import { isMobileSafari, isSafari } from "react-device-detect";
import { Link } from "react-router-dom";

import styles from "./Button.module.scss";

export type ButtonProps = {
  to?: string;
  label?: string;
  tooltip?: string;
  icon?: JSX.Element;
  mode?: "route" | "anchor" | "button";
  isLight?: boolean;
  isLabelHidden?: boolean;
  iconRight?: boolean;
  disabled?: boolean;
  appearInactive?: boolean;
  className?: string;
} & React.ComponentPropsWithoutRef<"button">;

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
const Button = ({
  to: link,
  label,
  tooltip,
  icon,
  mode,
  isLight,
  isLabelHidden,
  iconRight,
  disabled,
  appearInactive,
  className: additionalClassName,
  ...buttonProps
}: // eslint-disable-next-line sonarjs/cognitive-complexity
ButtonProps) => {
  const deviceIsTouch = useTouchInputQuery();

  const className = cnScoped(styles)(
    styles._acrylicButton,
    label && !isLabelHidden ? "px-8" : "px-4 h-fit",
    isLight && !disabled ? "acrylic-light" : "acrylic-dark",
    isLight && !disabled ? styles._light : styles._dark,
    // Radial border doesn't work with Safari
    { [styles._safari]: isSafari || isMobileSafari },
    { [styles._appearInactive]: Boolean(appearInactive) }
  );

  const setHoverEffects = useCallback(
    (e: React.MouseEvent<HTMLElement>) =>
      setMouseHoverCssProperties(e, false, deviceIsTouch),
    [deviceIsTouch]
  );

  const inner = (
    <span className={cn("flex items-center justify-between gap-2")}>
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
            className + (additionalClassName ? ` ${additionalClassName}` : "")
          }
          onMouseMove={setHoverEffects}
          title={label && tooltip}
          to={link ?? "/"}
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
            className + (additionalClassName ? ` ${additionalClassName}` : "")
          }
          disabled={disabled}
          onMouseMove={setHoverEffects}
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
          className={`${className} ${additionalClassName ?? ""}`}
          href={link ?? "/"}
          onMouseMove={setHoverEffects}
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
