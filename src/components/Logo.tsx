import { useTouchInputQuery } from "@hooks/useMediaQuery";
import cn, { cnScoped } from "@styles/cssUtils";
import { setMouseHoverCssProperties } from "@utils/mouseHover";

import styles from "./Logo.module.scss";

type LogoProps = {
  imageSrc: string;
  altText?: string;
};

/**
 * Circular logo with hover effects
 */
const Logo: React.FC<LogoProps> = ({ imageSrc, altText = "logo" }) => {
  const deviceIsTouch = useTouchInputQuery();
  const [hasImageLoaded, setImageLoaded] = useState(false);

  const imageLoaded = useCallback(() => setImageLoaded(true), []);

  const setHoverEffects = useCallback(
    (e: React.MouseEvent<HTMLElement>) =>
      setMouseHoverCssProperties(e, false, deviceIsTouch),
    [deviceIsTouch]
  );

  return (
    <div
      className={cnScoped(styles)(styles._logoBorder)}
      onMouseMove={setHoverEffects}
    >
      <img
        alt={altText}
        className={cn(
          "relative aspect-square object-cover",
          "rounded-full",
          "-z-[1]",
          "h-56",
          "pointer-events-none",
          "text-center",
          { "animate-pulse bg-slate-700": !hasImageLoaded }
        )}
        onLoad={imageLoaded}
        src={imageSrc}
      />
    </div>
  );
};

export default Logo;
