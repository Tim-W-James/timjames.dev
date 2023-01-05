import logo from "@assets/profile.jpg";
import Button from "@components/Button";
import Logo from "@components/Logo";
import Tooltip from "@components/Tooltip";
import Card from "@components/blog/Card";
import LoadingCard from "@components/blog/LoadingCard";
import Timeline from "@components/timeline/Timeline";
import technologies from "@constants/technologies";
import timelineData from "@constants/timelineData";
import useDevdottoArticlesMeta from "@hooks/useDevdottoArticlesMeta";
import useMediaQuery from "@hooks/useMediaQuery";
import ParallaxMountains from "@layout/background/ParallaxMountains";
import cn from "@styles/cssUtils";
import {
  BsFillArrowRightCircleFill,
  BsFillFileEarmarkCodeFill,
  BsFillKanbanFill,
  BsGithub,
  BsLinkedin,
  BsTwitter,
} from "react-icons/bs";
import { GiTalk } from "react-icons/gi";
import { HiMagnifyingGlassCircle } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
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
      icon={<BsLinkedin className={cn({ "text-4xl": shouldShrinkButtons })} />}
      isLabelHidden={shouldShrinkButtons}
      isLight
      label={"Linkedin"}
      to="https://www.linkedin.com/in/timothy-william-james/"
      tooltip="Find me on Linkedin"
    />
    <Button
      icon={<BsGithub className={cn({ "text-4xl": shouldShrinkButtons })} />}
      isLabelHidden={shouldShrinkButtons}
      isLight
      label={"GitHub"}
      to="https://github.com/Tim-W-James"
      tooltip="Find my projects on GitHub"
    />
    <Button
      icon={<BsTwitter className={cn({ "text-4xl": shouldShrinkButtons })} />}
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
    <section
      className={cn(
        "flex gap-4 text-xl items-center place-content-center",
        "flex-row",
        "flex-wrap"
      )}
    >
      {Object.entries(technologies)
        .filter(([_, value]) => value.isCore)
        .map(([key, value], index) => (
          <HashLink
            className={cn(
              "inline-flex",
              "items-center",
              "hover:text-light-accent active:text-dark-accent active:underline"
            )}
            key={index}
            title={`View all my projects that use ${key}`}
            to={`/projects?${new URLSearchParams({
              technologies: key.toLowerCase(),
            }).toString()}`}
          >
            {value.icon ? (
              <>
                {value.icon}
                {"\u00A0"}
              </>
            ) : null}
            {key}
          </HashLink>
        ))}
    </section>
  </div>
);

const AboutMe: React.FC = () => (
  <div
    className={cn(
      // eslint-disable-next-line sonarjs/no-duplicate-string
      "flex mx-auto items-center place-content-center px-8 mb-8",
      "flex-col"
    )}
  >
    <h2 id="about">
      <HashLink
        className={cn("hash-link")}
        onClick={() =>
          navigator.clipboard.writeText(
            `${location.href.split("#")[0] || ""}#about`
          )
        }
        to={"#about"}
      >
        About Me{" "}
      </HashLink>
      <hr className={cn("radial-border")} />
    </h2>
    <br />
    <section>
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
          {/* eslint-disable-next-line max-len */}
          with a <Tooltip
            isInverted
            text="GPA"
            tooltip="Grade Point Average"
          />{" "}
          of 6.3/7
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
    </section>
  </div>
);

const MajorProjects: React.FC = () => {
  const hasTwoColumns = !useMediaQuery("(max-width: 767px)");
  return (
    <div className={cn("mb-8")}>
      <div
        className={cn(
          "flex mx-auto items-center place-content-center px-8",
          "flex-col"
        )}
      >
        <h2 className={cn("mt-8 mb-0")} id="projects">
          <HashLink
            className={cn("hash-link")}
            onClick={() =>
              navigator.clipboard.writeText(
                `${location.href.split("#")[0] || ""}#projects`
              )
            }
            to={"#projects"}
          >
            Major Projects{" "}
          </HashLink>
          {!hasTwoColumns ? <hr className={cn("radial-border")} /> : null}
        </h2>
      </div>
      <section>
        <Timeline
          data={timelineData}
          filterFunc={(item) => !!item.isFeatured}
        />
        <div className={cn("flex justify-center")}>
          <Button
            icon={<BsFillArrowRightCircleFill />}
            iconRight
            isLight
            label={"More Projects"}
            mode="route"
            to="/projects"
            tooltip="View more projects"
          />
        </div>
      </section>
    </div>
  );
};

const Hobbies: React.FC = () => (
  <div
    className={cn(
      "flex mx-auto items-center place-content-center px-8 mt-8",
      "flex-col"
    )}
  >
    <h2 id="hobbies">
      <HashLink
        className={cn("hash-link")}
        onClick={() =>
          navigator.clipboard.writeText(
            `${location.href.split("#")[0] || ""}#hobbies`
          )
        }
        to={"#hobbies"}
      >
        What I do When I&apos;m Not Writing Code{" "}
      </HashLink>
      <hr className={cn("radial-border")} />
    </h2>
    <br />
    <section>
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
          🎥 <b className={cn("font-bold")}>Movies</b>: Bladerunner 2049, Mad
          Max: Fury Road, What We Do in the Shadows
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
    </section>
  </div>
);

const Skill: React.FC<{
  heading: JSX.Element;
  icon: JSX.Element;
  body: JSX.Element;
}> = ({ heading, icon, body }) => (
  <div className={cn("mb-4")}>
    <h3
      className={cn(
        "mb-0 text-light-accent",
        "inline-flex",
        "items-center gap-1"
      )}
    >
      {icon}
      {heading}
    </h3>
    <p className={cn("hyphens-none")}>{body}</p>
  </div>
);

const Skills: React.FC = () => (
  <div className={cn("flex mx-auto px-8 mt-8", "flex-col")}>
    <h2 className={cn("self-center mb-4")} id="skills">
      <HashLink
        className={cn("hash-link")}
        onClick={() =>
          navigator.clipboard.writeText(
            `${location.href.split("#")[0] || ""}#skills`
          )
        }
        to={"#skills"}
      >
        Skills{" "}
      </HashLink>
      <hr className={cn("radial-border")} />
    </h2>
    <br />
    <section className={cn("text-left text-xl")}>
      <Skill
        body={
          <>
            Familiar with{" "}
            <Tooltip
              isInverted
              text="Agile"
              tooltip="Set of guiding principles for software development"
            />{" "}
            principles and{" "}
            <Tooltip
              isInverted
              text="CI/CD"
              tooltip="Continuous Integration and Delivery"
            />
            . At{" "}
            <HashLink
              className={cn("link")}
              title={"View my projects with Agile Digital"}
              to={"projects?categories=Agile%2520Digital"}
            >
              Agile Digital
            </HashLink>
            , I have project experience working with teams using{" "}
            <Tooltip isInverted text="Kanban" tooltip="Agile framework" />. I
            collaborate effectively with other developers, frequently practicing
            pair programming and reviewing{" "}
            <Tooltip isInverted text="PR" tooltip="Pull Request" />
            s. View my contributions on{" "}
            <a
              className={cn("link")}
              href={"https://github.com/Tim-W-James"}
              rel="noreferrer"
              target="_blank"
              title={"View my contributions"}
            >
              GitHub
            </a>
            .
          </>
        }
        heading={<>Agile Software Development</>}
        icon={<BsFillKanbanFill />}
      />
      <Skill
        body={
          <>
            I strive for a exceptional level of quality in my work and
            proactively seek to improve my craft. I apply my creativity when
            {/* eslint-disable-next-line max-len */}
            building software, and enjoy collaborating with clients to deliver
            the best possible{" "}
            <Tooltip isInverted text="UX" tooltip="User Experience" />.
          </>
        }
        heading={<>Attention to Detail</>}
        icon={<HiMagnifyingGlassCircle />}
      />
      <Skill
        body={
          <>
            I convey ideas clearly in both written and verbal forms, maintaining
            a{" "}
            <Link className={cn("link")} title={"View my blog"} to={"/blog"}>
              blog
            </Link>{" "}
            and performing tech talks at{" "}
            <HashLink
              className={cn("link")}
              title={"View my projects with Agile Digital"}
              to={"projects?categories=Agile%2520Digital"}
            >
              Agile Digital
            </HashLink>
            . On a project with{" "}
            <HashLink
              className={cn("link")}
              title={"View project details"}
              to={"/projects?reset#Toyota Finance Australia"}
            >
              Toyota Finance Australia
            </HashLink>
            , I demonstrated my ability to work with a client of substantial
            scale. As a spokesperson for an{" "}
            <HashLink
              className={cn("link")}
              title={"View project details"}
              to={"/projects?reset#Siding Spring Observatory VR Experience"}
            >
              ANU TechLauncher project
            </HashLink>
            , I was granted the award for best pitch.
          </>
        }
        heading={<>Concise and Confident Communicator</>}
        icon={<GiTalk />}
      />
      <Skill
        body={
          <>
            I ensure my code is robust and maintainable by adopting a functional
            programming style. I prefer strict typing across the tech stack,
            employ code quality tools like{" "}
            <a
              className={cn("link")}
              href={"https://www.npmjs.com/package/@tim-w-james/eslint-config"}
              rel="noreferrer"
              target="_blank"
              title={"View my custom ESLint config"}
            >
              ESLint
            </a>
            , and take a layered approach to testing. I take care to document my
            solutions, and continually address technical debt. By taking
            initiative with{" "}
            <Tooltip isInverted text="DX" tooltip="Developer Experience" />{" "}
            tooling and {/* eslint-disable-next-line max-len */}
            <Tooltip
              isInverted
              text="DevOps"
              tooltip="Developer Operations"
            />{" "}
            infrastructure I am able to boost my productivity. See my{" "}
            <HashLink
              className={cn("link")}
              title={"View my tech stack"}
              to={"/#technologies"}
            >
              core tech stack
            </HashLink>
            .
          </>
        }
        heading={<>Code Quality</>}
        icon={<BsFillFileEarmarkCodeFill />}
      />
    </section>
  </div>
);

const LatestBlogPost: React.FC = () => {
  const latestArticle = useDevdottoArticlesMeta(2);

  return (
    <div>
      <h2 className={cn("self-center mb-4")} id="blog">
        <HashLink
          className={cn("hash-link")}
          onClick={() =>
            navigator.clipboard.writeText(
              `${location.href.split("#")[0] || ""}#blog`
            )
          }
          to={"#blog"}
        >
          Latest Blog Posts{" "}
        </HashLink>
        <hr className={cn("radial-border")} />
      </h2>
      <section>
        <div className={cn("flex gap-4 p-0 mx-2 justify-center", "flex-wrap")}>
          {latestArticle.loading
            ? [...Array(2).keys()].map((key) => <LoadingCard key={key} />)
            : latestArticle.articles.map((articleMeta, index) => (
                <Card article={articleMeta} key={index} />
              ))}
        </div>
        <div className={cn("flex justify-center mt-8")}>
          <Button
            icon={<BsFillArrowRightCircleFill />}
            iconRight
            isLight
            label={"More Articles"}
            mode="route"
            to="/blog"
            tooltip="View more articles"
          />
        </div>
      </section>
    </div>
  );
};

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
        <SocialLinks shouldShrinkButtons={shouldShrinkButtons} />
        <CoreTechnologies />
        <div className={cn("solid-background")}>
          <div className={cn("pt-8 mx-auto container")}>
            <AboutMe />
            <LatestBlogPost />
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
      </div>
    </ParallaxProvider>
  );
};

export default Home;
