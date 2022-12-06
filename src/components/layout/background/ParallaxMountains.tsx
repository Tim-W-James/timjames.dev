import { Parallax } from "react-scroll-parallax";
import style from "./ParallaxMountains.module.scss";

const ParallaxMountains = () => (
  <div className={style.container}>
    <div className={style.mountain_1} />
    <Parallax speed={-10} style={{ zIndex: -2 }}>
      <div className={style.mountain_2} />
    </Parallax>
    <Parallax speed={-8} style={{ zIndex: -3 }}>
      <div className={style.mountain_3} />
    </Parallax>
  </div>
);

export default ParallaxMountains;
