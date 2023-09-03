import { useTouchInputQuery } from "@hooks/useMediaQuery";
import cn, { cnScoped } from "@styles/cssUtils";
import { setMouseHoverCssProperties } from "@utils/mouseHover";
import { isMobileSafari, isSafari } from "react-device-detect";
import { Link } from "react-router-dom";

import styles from "./Button.module.scss";

export type ButtonProps = {
  /**
   * Label display text
   */
  label?: string;
  /**
   * Title to display on hover
   */
  tooltip?: string;
  /**
   * Icon element to display next to the label
   */
  icon?: JSX.Element;
  /**
   * Whether to use the light or dark theme
   */
  isLight?: boolean;
  /**
   * Conditionally hide the label
   */
  isLabelHidden?: boolean;
  /**
   * Position the icon to the right, left by default
   */
  iconRight?: boolean;
  /**
   * Disable the button
   */
  disabled?: boolean;
  /**
   * Appear disabled, but still interactive for accessibility reasons
   */
  appearInactive?: boolean;
  /**
   * Custom class names to append to the defaults
   */
  className?: string;
} & (
  | {
      /**
       * Whether to route to a SPA route or an external link
       */
      mode?: "route" | "anchor";
      /**
       * href or link for the anchor or route respectively
       */
      to?: string;
    }
  | {
      /**
       * Treat as a primitive HTML button with an onClick
       */
      mode: "button";
      /**
       * Click event
       */
      onClick?: React.MouseEventHandler<HTMLButtonElement>;
      /**
       * Props to pass to the HTML button
       */
      childProps?: React.ComponentPropsWithoutRef<"button">;
    }
);

/**
 * Custom button component
 */
const Button = ({
  label,
  tooltip,
  icon,
  isLight,
  isLabelHidden,
  iconRight,
  disabled,
  appearInactive,
  className: additionalClassName,
  ...otherProps // eslint-disable-next-line sonarjs/cognitive-complexity
}: ButtonProps) => {
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

  switch (otherProps.mode) {
    case "route":
      return (
        <Link
          aria-label={label}
          className={
            className + (additionalClassName ? ` ${additionalClassName}` : "")
          }
          onMouseMove={setHoverEffects}
          // eslint-disable-next-line react/jsx-no-leaked-render
          title={label && tooltip}
          to={otherProps.to ?? "/"}
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
          onClick={otherProps.onClick}
          onMouseMove={setHoverEffects}
          // eslint-disable-next-line react/jsx-no-leaked-render
          title={label && tooltip}
          type="button"
          {...otherProps.childProps}
        >
          {inner}
        </button>
      );

    default:
      return (
        <a
          aria-label={label}
          className={`${className} ${additionalClassName ?? ""}`}
          href={otherProps.to ?? "/"}
          onMouseMove={setHoverEffects}
          rel="noreferrer"
          target="_blank"
          // eslint-disable-next-line react/jsx-no-leaked-render
          title={label && tooltip}
          type="button"
        >
          {inner}
        </a>
      );
  }
};

export default Button;
