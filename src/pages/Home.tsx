import logo from "@assets/profile.jpg";
import Button from "@components/Button";
import Logo from "@components/Logo";
import Timeline from "@components/Timeline";
import technologies from "@constants/technologies";
import timelineData from "@constants/timelineData";
import useMediaQuery from "@hooks/useMediaQuery";
import ParallaxMountains from "@layout/background/ParallaxMountains";
import cn from "@styles/cssUtils";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import { ParallaxProvider } from "react-scroll-parallax";

const SocialLinks: React.FC<{ shouldShrinkButtons: boolean }> = ({
  shouldShrinkButtons,
}) => (
  <div
    className={cn(
      "flex gap-4 justify-around items-center mt-4 max-w-2xl mx-auto",
      "flex-row",
      "flex-wrap"
    )}
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
      tooltip="Follow me on Twitter @TimWJames"
    />
  </div>
);

const CoreTechnologies: React.FC = () => (
  <div
    className={cn(
      "flex mt-8 mx-auto max-w-2xl items-center place-content-center",
      "solid-background",
      "flex-col"
    )}
  >
    <h2 id="technologies">
      Core Technologies
      {/* eslint-disable-next-line sonarjs/no-duplicate-string */}
      <hr className={cn("radial-border")} />
    </h2>
    <br />
    <div
      className={cn(
        "flex gap-4 text-xl items-center place-content-center",
        "flex-row",
        "flex-wrap"
      )}
    >
      {Object.entries(technologies)
        .filter((technology) => technology[1].isCore)
        .map((technology, index) => (
          <a
            className={cn("inline-flex items-center")}
            href={technology[1].link}
            key={index}
            rel="noreferrer"
            target="_blank"
            title={technology[0]}
          >
            {technology[0]}
            {technology[1].icon ? (
              <>
                {"\u00A0"}
                {technology[1].icon}
              </>
            ) : null}
          </a>
        ))}
    </div>
  </div>
);

const AboutMe: React.FC = () => (
  <div
    className={cn(
      "flex mx-auto items-center place-content-center px-8",
      "flex-col"
    )}
  >
    <h2 id="about">
      About Me
      <hr className={cn("radial-border")} />
    </h2>
    <br />
    <ul className={cn("list-disc text-xl text-left")}>
      <li>
        💼 <b className={cn("font-bold")}>Software Engineer</b> at{" "}
        <a
          className={cn("link")}
          href="https://github.com/agiledigital"
          rel="noreferrer"
          target="_blank"
          title={"Agile Digital Website"}
        >
          Agile Digital
        </a>{" "}
        since 2021
      </li>
      <li>
        🎓{" "}
        <b className={cn("font-bold")}>Bachelor of Information Technology </b>
        at the{" "}
        <a
          className={cn("link")}
          href="https://www.anu.edu.au/"
          rel="noreferrer"
          target="_blank"
          title={"ANU"}
        >
          Australian National University
        </a>{" "}
        with a GPA of 6.3/7
      </li>
      <li>
        📄 View my certifications on{" "}
        <a
          className={cn("link")}
          href="https://www.credly.com/users/timjames/badges"
          rel="noreferrer"
          target="_blank"
          title={"Certifications"}
        >
          Credly
        </a>
      </li>
      <li>
        🗺️ Located in{" "}
        <a
          className={cn("link")}
          href="https://www.google.com.au/maps/place/Canberra+ACT"
          rel="noreferrer"
          target="_blank"
          title={"Location"}
        >
          Canberra, Australia
        </a>
      </li>
      <li>
        📫 How to reach me:{" "}
        <a
          className={cn("link")}
          href="mailto:tim.james.work9800@gmail.com"
          rel="noreferrer"
          target="_blank"
          title={"tim.james.work9800@gmail.com"}
        >
          tim.james.work9800@gmail.com
        </a>
      </li>
    </ul>
  </div>
);

const Hobbies: React.FC = () => (
  <div
    className={cn(
      "flex mx-auto items-center place-content-center px-8",
      "flex-col"
    )}
  >
    <h2 id="hobbies">
      What I do When I&apos;m Not Writing Code
      <hr className={cn("radial-border")} />
    </h2>
    <br />
    <ul className={cn("list-disc text-xl text-left")}>
      <li>
        ✨ <b className={cn("font-bold")}>Interests</b>: Hiking, Astronomy,
        Creative Writing, Philosophy, Guitar, Board Games
      </li>
      <li>
        🎮 <b className={cn("font-bold")}>Video Games</b>: Hollow Knight,
        Monster Hunter, Subnautica - Find me on{" "}
        <a
          className={cn("link")}
          href="https://steamcommunity.com/id/ExplosiveFridge"
          rel="noreferrer"
          target="_blank"
          title={"ExplosiveFridge"}
        >
          Steam
        </a>
      </li>
      <li>
        🎥 <b className={cn("font-bold")}>Movies</b>: Bladerunner 2049, Mad Max:
        Fury Road, What We Do in the Shadows
      </li>
      <li>
        📺 <b className={cn("font-bold")}>TV Shows</b>: The Expanse, Breaking
        Bad, Game of Thrones
      </li>
      <li>
        📚 <b className={cn("font-bold")}>Books</b>: Dune
      </li>
      <li>
        {/* eslint-disable-next-line max-len */}
        🎵 <b className={cn("font-bold")}>Music</b>: Tame Impala - Find me on{" "}
        <a
          className={cn("link")}
          href="https://open.spotify.com/user/22xzbbohotkdpq5wfipvefk4y"
          rel="noreferrer"
          target="_blank"
          title={"TimJ"}
        >
          Spotify
        </a>
      </li>
      <li>
        🐈 <b className={cn("font-bold")}>Pets</b>: I have a cat called Max
      </li>
    </ul>
  </div>
);

const Home: React.FC = () => {
  const shouldShrinkButtons = useMediaQuery("(max-width: 600px)");
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
          <h1>
            👋 Hello,
            <br />
            I&apos;m <b className={cn("text-light-accent")}>Tim James</b>
            <hr className={cn("radial-border")} />
            Full-Stack Developer
          </h1>
        </header>
        <SocialLinks shouldShrinkButtons={shouldShrinkButtons} />
        <CoreTechnologies />
        <div className={cn("solid-background")}>
          <div className={cn("pt-8 mx-auto container")}>
            <AboutMe />
            <h2 className={cn("pt-8 mb-0 mx-auto container")} id="timeline">
              Major Projects
            </h2>
            <Timeline data={timelineData} />
            <Hobbies />
          </div>
          <div className={cn("pb-16")} />
        </div>
      </div>
    </ParallaxProvider>
  );
};

export default Home;
