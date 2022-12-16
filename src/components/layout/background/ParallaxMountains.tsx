import cn from "@styles/cssUtils";
import { Parallax } from "react-scroll-parallax";
import { ClassNames } from "./ParallaxMountains.module.scss";

const ParallaxMountains = () => (
  <div className={cn<ClassNames>()("_container")}>
    <div className={cn<ClassNames>()("_mountainMiddle")} />
    <Parallax speed={-10} style={{ zIndex: -2 }}>
      <div className={cn<ClassNames>()("_mountainLeft")} />
    </Parallax>
    <Parallax speed={-8} style={{ zIndex: -3 }}>
      <div className={cn<ClassNames>()("_mountainRight")} />
    </Parallax>
  </div>
);

export default ParallaxMountains;
