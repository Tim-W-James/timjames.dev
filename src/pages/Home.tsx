import logo from "@assets/profile.jpg";
import Logo from "@components/Logo";
import ParallaxMountains from "@layout/background/ParallaxMountains";
import cn from "@styles/cssUtils";
import { BsLinkedin } from "react-icons/bs";
import { ParallaxProvider } from "react-scroll-parallax";

const Home: React.FC = () => (
  <ParallaxProvider>
    <div className={cn()("text-center")}>
      <ParallaxMountains />
      <header>
        <div className="mt-56 flex flex-col items-center place-content-center">
          <Logo imageSrc={logo} />
          <h1>
            👋 Hullo,
            <br />
            I&apos;m <b className={cn()("text-light-accent")}>Tim James</b>
            <hr className={cn()("radial-border")} />
            Full-Stack Developer
          </h1>
          <div>
            <div className={cn()("solid-background")}>
              <h1>Coming Soon...</h1>
              <a href="https://www.linkedin.com/in/timothy-william-james/">
                <BsLinkedin /> Find me on Linkedin
              </a>
            </div>
          </div>
        </div>
      </header>
    </div>
  </ParallaxProvider>
);

export default Home;
