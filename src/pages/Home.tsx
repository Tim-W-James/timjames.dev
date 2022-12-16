import logo from "@assets/profile.jpg";
import ParallaxMountains from "@layout/background/ParallaxMountains";
import cn from "@styles/cssUtils";
import { setMouseHoverCssProperties } from "@utils/mouseHover";
import { BsLinkedin } from "react-icons/bs";
import styles, { ClassNames } from "./Home.module.scss";

const Home: React.FC = () => (
  <div className={cn<ClassNames>()(styles._home)}>
    <ParallaxMountains />
    <header>
      <div
        className={cn<ClassNames>()(styles._homeLogoWrapper)}
        onMouseMove={(e) => setMouseHoverCssProperties(e)}
      >
        <img
          alt="logo"
          className={cn<ClassNames>()(styles._homeLogo)}
          src={logo}
        />
      </div>
      <h1>
        👋 Hullo,
        <br />
        I&apos;m{" "}
        <b className={cn<ClassNames>()(styles._highlight)}>Tim James</b>
        <hr className={cn<ClassNames>()(styles._gradientHz)} />
        Full-Stack Developer
      </h1>
      <div className={cn<ClassNames>()(styles._gradientBackground)} />
      <div className={cn<ClassNames>()(styles._solidBackground)}>
        <h1>Coming Soon...</h1>
        <a href="https://www.linkedin.com/in/timothy-william-james/">
          <BsLinkedin /> Find me on Linkedin
        </a>
      </div>
    </header>
  </div>
);

export default Home;
