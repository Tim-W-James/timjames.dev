import logo from "@assets/profile.jpg";
import ParallaxMountains from "@layout/background/ParallaxMountains";
import { BsLinkedin } from "react-icons/bs";
import styles from "./Home.module.scss";

const mousePercent = (
  e: React.MouseEvent<HTMLDivElement>,
  coordinate: "X" | "Y"
): number =>
  ((e[`page${coordinate}`] -
    e.currentTarget[`offset${coordinate === "X" ? "Left" : "Top"}`] -
    (coordinate === "Y" ? window.scrollY : 0)) /
    e.currentTarget[`client${coordinate === "X" ? "Width" : "Height"}`]) *
  100;

const Home: React.FC = () => (
  <div className={styles["home"]}>
    <ParallaxMountains />
    <header>
      <div
        className={styles["home-logo-wrapper"]}
        onMouseMove={(e) => {
          const horizontalPercent = mousePercent(e, "X");
          const verticalPercent = mousePercent(e, "Y");
          const mouseDegFromCenter =
            (Math.atan((-50 + horizontalPercent) / (50 - verticalPercent)) *
              180) /
            3.14;
          e.currentTarget.style.setProperty(
            "--mouse-x",
            `${horizontalPercent.toFixed(2)}%`
          );
          e.currentTarget.style.setProperty(
            "--mouse-y",
            `${verticalPercent.toFixed(2)}%`
          );
          e.currentTarget.style.setProperty(
            "--mouse-deg",
            `${(verticalPercent > 50
              ? mouseDegFromCenter
              : mouseDegFromCenter < 0
              ? 180 - Math.abs(mouseDegFromCenter)
              : -(180 - Math.abs(mouseDegFromCenter))
            ).toFixed(2)}deg`
          );
        }}
      >
        <img alt="logo" className={styles["home-logo"]} src={logo} />
      </div>
      <h1>
        👋 Hullo,
        <br />
        I&apos;m Tim James
        <hr className={styles["gradient-hz"]} />
        Full-Stack Developer
      </h1>
      <div className={styles["gradient-background"]} />
      <div className={styles["solid-background"]}>
        <h1>Coming Soon...</h1>
        <a href="https://www.linkedin.com/in/timothy-william-james/">
          <BsLinkedin /> Find me on Linkedin
        </a>
      </div>
    </header>
  </div>
);

export default Home;
