import { Parallax } from "react-scroll-parallax";
import "./ParallaxMountains.scss";

const ParallaxMountains = () => (
  <div className="container">
    <div className="mountain-1" />
    <Parallax speed={-10} style={{ zIndex: -2 }}>
      <div className="mountain-2" />
    </Parallax>
    <Parallax speed={-8} style={{ zIndex: -3 }}>
      <div className="mountain-3" />
    </Parallax>
  </div>
);

export default ParallaxMountains;
