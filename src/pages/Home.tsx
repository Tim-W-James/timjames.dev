/* eslint-disable sonarjs/no-duplicate-string */
import Button from "@components/buttons/Button";
import BlogPostsCarousel from "@features/blog/components/BlogPostsCarousel";
import AboutMe from "@features/home/components/AboutMe";
import CoreTechnologies from "@features/home/components/CoreTechnologies";
import MajorProjects from "@features/home/components/MajorProjects";
import Skills from "@features/home/components/Skills";
import SocialLinks from "@features/home/components/SocialLinks";
import useMediaQuery, { useMobileQuery } from "@hooks/useMediaQuery";
import ParallaxMountains from "@layout/background/ParallaxMountains";
import cn, { cnScoped } from "@styles/cssUtils";
import { isMobileSafari } from "react-device-detect";
import FadeIn from "react-fade-in";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { ParallaxProvider } from "react-scroll-parallax";

import styles from "./Home.module.scss";
const Home: React.FC = () => {
  const shouldShrinkButtons = useMediaQuery("(max-width: 670px)");
  const isDeviceMobile = useMobileQuery();

  return (
    <ParallaxProvider>
      <div
        className={cn("text-center")}
        /* Force Google to use custom meta description for snippets */
        data-nosnippet
      >
        <ParallaxMountains />
        <FadeIn transitionDuration={400}>
          <header
            className={cnScoped(styles)(
              "flex place-content-center items-center",
              "flex-col",
              isDeviceMobile
                ? !isMobileSafari
                  ? styles._textAlignmentMobile
                  : ""
                : styles._textAlignment
            )}
          >
            <h1
              className={cn(isMobileSafari ? "mt-32" : "mt-20")}
              id="timjames"
            >
              <span>
                <span className={cn("rounded-lg", "bg-dark-shades")}>
                  👋 Hello,
                </span>
                <br />
                <span className={cn("rounded-lg", "bg-dark-shades")}>
                  I&apos;m <b className={cn("text-light-accent")}>Tim James</b>
                </span>
                <hr className={cn("radial-border")} />
                <span className={cn("rounded-lg", "bg-dark-shades")}>
                  Full-Stack Developer
                </span>
              </span>
            </h1>
          </header>
        </FadeIn>
        <main>
          <FadeIn transitionDuration={400}>
            <SocialLinks shouldShrinkButtons={shouldShrinkButtons} />
          </FadeIn>
          <CoreTechnologies />
          <div
            className={cn(
              isDeviceMobile ? "mobile-solid-background" : "solid-background"
            )}
          >
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
