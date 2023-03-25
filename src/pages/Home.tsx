import Logo from "@components/Logo";
import Button from "@components/buttons/Button";
import BlogPostsCarousel from "@features/blog/components/BlogPostsCarousel";
import AboutMe from "@features/home/components/AboutMe";
import CoreTechnologies from "@features/home/components/CoreTechnologies";
import MajorProjects from "@features/home/components/MajorProjects";
import Skills from "@features/home/components/Skills";
import SocialLinks from "@features/home/components/SocialLinks";
import useMediaQuery from "@hooks/useMediaQuery";
import logo from "@images/profile.jpg";
import ParallaxMountains from "@layout/background/ParallaxMountains";
import cn from "@styles/cssUtils";
import FadeIn from "react-fade-in";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { ParallaxProvider } from "react-scroll-parallax";

const Home: React.FC = () => {
  const shouldShrinkButtons = useMediaQuery("(max-width: 670px)");

  return (
    <ParallaxProvider>
      <div className={cn("text-center")}>
        <ParallaxMountains />
        <FadeIn transitionDuration={400}>
          <header
            className={cn(
              "mt-56 flex place-content-center items-center",
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
        </FadeIn>
        <main>
          <FadeIn transitionDuration={400}>
            <SocialLinks shouldShrinkButtons={shouldShrinkButtons} />
          </FadeIn>
          <CoreTechnologies />
          <div className={cn("solid-background")}>
            <div className={cn("container mx-auto pt-8")}>
              <FadeIn transitionDuration={400}>
                <AboutMe />
                <BlogPostsCarousel />
                <MajorProjects />
                <Skills />
                <div className={cn("mt-8 flex justify-center")}>
                  <Button
                    icon={<BsFillArrowRightCircleFill />}
                    iconRight
                    isLight
                    label="Contact Me"
                    mode="route"
                    to="/contact"
                    tooltip="Get in touch"
                  />
                </div>
              </FadeIn>
            </div>
            <div className={cn("pb-16")} />
          </div>
        </main>
      </div>
    </ParallaxProvider>
  );
};

export default Home;
