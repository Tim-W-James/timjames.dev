import logo from "@assets/profile.jpg";
import ParallaxMountains from "@layout/background/ParallaxMountains";
import { setMouseHoverCssProperties } from "@utils/mouseHover";
import { BsLinkedin } from "react-icons/bs";
import styles from "./Home.module.scss";

const Home: React.FC = () => (
  <div className={styles.home}>
    <ParallaxMountains />
    <header>
      <div
        className={styles.homeLogoWrapper}
        onMouseMove={(e) => setMouseHoverCssProperties(e)}
      >
        <img alt="logo" className={styles.homeLogo} src={logo} />
      </div>
      <h1>
        👋 Hullo,
        <br />
        I&apos;m <b className={styles.highlight}>Tim James</b>
        <hr className={styles.gradientHz} />
        Full-Stack Developer
      </h1>
      <div className={styles.gradientBackground} />
      <div className={styles.solidBackground}>
        <h1>Coming Soon...</h1>
        <a href="https://www.linkedin.com/in/timothy-william-james/">
          <BsLinkedin /> Find me on Linkedin
        </a>
      </div>
    </header>
  </div>
);

export default Home;
