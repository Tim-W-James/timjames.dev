import cn from "@styles/cssUtils";
import { Parallax } from "react-scroll-parallax";
import styles, { ClassNames } from "./ParallaxMountains.module.scss";

const ParallaxMountains = () => (
  <>
    <div className={cn<ClassNames>()(styles._gradientBackground)} />
    <div
      // Type checking doesn't work for certain fractional units
      className={"top-3/4 h-1/4 " + cn()("fixed bg-dark -z-[5] w-full left-0")}
    />
    <div className={cn()("flex justify-center w-full")}>
      <div className={cn<ClassNames>()(styles._mountainMiddle)} />
      <Parallax speed={-13} style={{ zIndex: -2 }}>
        <div className={cn<ClassNames>()(styles._mountainLeft)} />
      </Parallax>
      <Parallax speed={-13} style={{ zIndex: -3 }}>
        <div className={cn<ClassNames>()(styles._mountainRight)} />
      </Parallax>
    </div>
  </>
);

export default ParallaxMountains;
