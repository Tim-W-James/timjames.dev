import logo from "@assets/profile.jpg";
import Logo from "@components/Logo";
import Button from "@components/buttons/Button";
import BlogPostsCarousel from "@features/blog/components/BlogPostsCarousel";
import AboutMe from "@features/home/components/AboutMe";
import CoreTechnologies from "@features/home/components/CoreTechnologies";
import Hobbies from "@features/home/components/Hobbies";
import MajorProjects from "@features/home/components/MajorProjects";
import Skills from "@features/home/components/Skills";
import SocialLinks from "@features/home/components/SocialLinks";
import useMediaQuery from "@hooks/useMediaQuery";
import ParallaxMountains from "@layout/background/ParallaxMountains";
import cn from "@styles/cssUtils";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { ParallaxProvider } from "react-scroll-parallax";

const Home: React.FC = () => {
  const shouldShrinkButtons = useMediaQuery("(max-width: 670px)");

  return (
    <ParallaxProvider>
      <div className={cn("text-center")}>
        <ParallaxMountains />
        <header
          className={cn(
            "flex mt-56 items-center place-content-center",
            "flex-col"
          )}
        >
          <Logo imageSrc={logo} />
          <h1 id="timjames">
            👋 Hello,
            <br />
            I&apos;m <b className={cn("text-light-accent")}>Tim James</b>
            <hr className={cn("radial-border")} />
            Full-Stack Developer
          </h1>
        </header>
        <main>
          <SocialLinks shouldShrinkButtons={shouldShrinkButtons} />
          <CoreTechnologies />
          <div className={cn("solid-background")}>
            <div className={cn("pt-8 mx-auto container")}>
              <AboutMe />
              <BlogPostsCarousel />
              <MajorProjects />
              <Skills />
              <Hobbies />
              <div className={cn("flex justify-center mt-8")}>
                <Button
                  icon={<BsFillArrowRightCircleFill />}
                  iconRight
                  isLight
                  label={"Contact Me"}
                  mode="route"
                  to="/contact"
                  tooltip="Get in touch"
                />
              </div>
            </div>
            <div className={cn("pb-16")} />
          </div>
        </main>
      </div>
    </ParallaxProvider>
  );
};

export default Home;
