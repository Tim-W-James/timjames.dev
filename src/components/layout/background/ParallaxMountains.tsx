import { Parallax } from "react-scroll-parallax";
import styles from "./ParallaxMountains.module.scss";

const ParallaxMountains = () => (
  <div className={styles.container}>
    <div className={styles.mountainMiddle} />
    <Parallax speed={-10} style={{ zIndex: -2 }}>
      <div className={styles.mountainLeft} />
    </Parallax>
    <Parallax speed={-8} style={{ zIndex: -3 }}>
      <div className={styles.mountainRight} />
    </Parallax>
  </div>
);

export default ParallaxMountains;
