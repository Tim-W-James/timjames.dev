import logo from "@assets/profile.jpg";
import Button from "@components/Button";
import Logo from "@components/Logo";
import useMediaQuery from "@hooks/useMediaQuery";
import ParallaxMountains from "@layout/background/ParallaxMountains";
import cn from "@styles/cssUtils";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import { ParallaxProvider } from "react-scroll-parallax";

const Home: React.FC = () => {
  const shouldShrinkButtons = useMediaQuery("(max-width: 600px)");
  return (
    <ParallaxProvider>
      <div className={cn()("text-center")}>
        <ParallaxMountains />
        <header
          className={
            "flex flex-col " + cn()("mt-56 items-center place-content-center")
          }
        >
          <Logo imageSrc={logo} />
          <h1>
            👋 Hullo,
            <br />
            I&apos;m <b className={cn()("text-light-accent")}>Tim James</b>
            <hr className={cn()("radial-border")} />
            Full-Stack Developer
            <div
              className={
                "flex flex-row flex-wrap " +
                cn()("gap-4 justify-around items-center mt-4")
              }
            >
              <Button
                icon={<BsLinkedin />}
                isLabelHidden={shouldShrinkButtons}
                isLight
                label={"Linkedin"}
                to="https://www.linkedin.com/in/timothy-william-james/"
                tooltip="Find me on Linkedin"
              />
              <Button
                icon={<BsGithub />}
                isLabelHidden={shouldShrinkButtons}
                isLight
                label={"GitHub"}
                to="https://github.com/Tim-W-James"
                tooltip="Find my projects on GitHub"
              />
              <Button
                icon={<BsTwitter />}
                isLabelHidden={shouldShrinkButtons}
                isLight
                label={"Twitter"}
                to="https://twitter.com/TimWJames"
                tooltip="Follow me on Twitter"
              />
            </div>
          </h1>
        </header>
        <div className={cn()("mt-8")}>
          <h1>🛠️ Coming Soon...</h1>
        </div>
      </div>
    </ParallaxProvider>
  );
};

export default Home;
