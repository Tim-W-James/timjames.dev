import { useMobileQuery } from "@hooks/useMediaQuery";
import cn, { cnScoped } from "@styles/cssUtils";
import FadeIn from "react-fade-in";
import { Parallax } from "react-scroll-parallax";

import styles from "./ParallaxMountains.module.scss";

/**
 * Background component with parallax effect.
 */
const ParallaxMountains: React.FC = () => {
  const deviceIsMobile = useMobileQuery();
  return (
    <>
      <div className={cn("gradient-background")} />
      <div
        className={cn(
          "bg-dark-shades fixed left-0 -z-[5] w-screen",
          "top-3/4",
          "h-1/4"
        )}
      />
      <FadeIn transitionDuration={200}>
        {deviceIsMobile ? (
          <div className={cn("flex w-screen justify-center")}>
            <div className={cnScoped(styles)(styles._mountainMiddle)} />
          </div>
        ) : (
          <div className={cn("flex w-screen justify-center")}>
            <div className={cnScoped(styles)(styles._mountainMiddle)} />
            <Parallax speed={-13} style={{ zIndex: -2 }}>
              <div className={cnScoped(styles)(styles._mountainLeft)} />
            </Parallax>
            <Parallax speed={-13} style={{ zIndex: -3 }}>
              <div className={cnScoped(styles)(styles._mountainRight)} />
            </Parallax>
          </div>
        )}
      </FadeIn>
    </>
  );
};

export default ParallaxMountains;
