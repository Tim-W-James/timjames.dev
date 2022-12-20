import { useMobileQuery } from "@hooks/useMediaQuery";
import cn from "@styles/cssUtils";
import { Parallax } from "react-scroll-parallax";
import styles, { ClassNames } from "./ParallaxMountains.module.scss";

const ParallaxMountains = () => {
  const deviceIsMobile = useMobileQuery();
  return (
    <>
      <div className={cn<ClassNames>()(styles._gradientBackground)} />
      <div
        // Type checking doesn't work for certain fractional units
        className={
          "top-3/4 h-1/4 " + cn()("fixed bg-dark -z-[5] w-screen left-0")
        }
      />
      {deviceIsMobile ? (
        <div className={cn()("flex justify-center w-screen")}>
          <div className={cn<ClassNames>()(styles._mountainMiddle)} />
        </div>
      ) : (
        <div className={cn()("flex justify-center w-screen")}>
          <div className={cn<ClassNames>()(styles._mountainMiddle)} />
          <Parallax speed={-13} style={{ zIndex: -2 }}>
            <div className={cn<ClassNames>()(styles._mountainLeft)} />
          </Parallax>
          <Parallax speed={-13} style={{ zIndex: -3 }}>
            <div className={cn<ClassNames>()(styles._mountainRight)} />
          </Parallax>
        </div>
      )}
    </>
  );
};

export default ParallaxMountains;
