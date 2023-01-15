import { useTouchInputQuery } from "@hooks/useMediaQuery";
import cn, { cnScoped } from "@styles/cssUtils";
import { setMouseHoverCssProperties } from "@utils/mouseHover";
import styles from "./Logo.module.scss";

/**
 * Circular logo with hover effects
 *
 * @param {{ imageSrc; altText?; }} { image link, optional alt text }
 */
const Logo: React.FC<{
  imageSrc: string;
  altText?: string;
}> = ({ imageSrc, altText = "logo" }) => {
  const deviceIsTouch = useTouchInputQuery();

  return (
    <div
      className={cnScoped(styles)(styles._logoBorder)}
      onMouseMove={(e) => setMouseHoverCssProperties(e, false, deviceIsTouch)}
    >
      <img
        alt={altText}
        className={cn(
          "relative object-cover aspect-square",
          "rounded-full",
          "-z-[1]",
          "h-56",
          "pointer-events-none"
        )}
        src={imageSrc}
      />
    </div>
  );
};

export default Logo;
