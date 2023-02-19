import Accordion from "@components/Accordion";
import Tooltip from "@components/Tooltip";
import cv from "@pdfs/tim_james_cv.pdf";
import cn from "@styles/cssUtils";
import {
  BsFileEarmarkPdfFill,
  BsFillFileEarmarkCodeFill,
  BsFillKanbanFill,
} from "react-icons/bs";
import { GiTalk } from "react-icons/gi";
import { HiMagnifyingGlassCircle } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Skills: React.FC = () => {
  const copyFragment = useCallback(
    () =>
      navigator.clipboard.writeText(
        `${location.href.split("#")[0] || ""}#skills`
      ),
    []
  );

  return (
    <div className={cn("flex mx-auto px-8 mt-8", "flex-col")}>
      <h2 className={cn("self-center mb-4")} id="skills">
        <HashLink
          className={cn("hash-link")}
          onClick={copyFragment}
          to="#skills"
        >
          Skills{" "}
        </HashLink>
        <hr className={cn("radial-border")} />
      </h2>
      <br />
      <section aria-labelledby="skills" className={cn("text-left text-xl")}>
        <Accordion
          heading="Agile Software Development"
          icon={<BsFillKanbanFill />}
        >
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
              aria-label="Agile Digital"
              className={cn("link")}
              title="View my projects with Agile Digital"
              to="projects?categories=Agile%2520Digital"
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
              aria-label="GitHub"
              className={cn("link")}
              href="https://github.com/Tim-W-James"
              rel="noreferrer"
              target="_blank"
              title="View my contributions"
            >
              GitHub
            </a>
            .
          </>
        </Accordion>
        <Accordion
          heading="Attention to Detail"
          icon={<HiMagnifyingGlassCircle />}
        >
          <>
            I strive for a exceptional level of quality in my work and
            proactively seek to improve my craft. I apply my creativity when
            {/* eslint-disable-next-line max-len */} building software, and
            enjoy collaborating with clients to deliver the best possible{" "}
            <Tooltip isInverted text="UX" tooltip="User Experience" />. To
            ensure my work is inclusive, I place an emphasis on accessibility.
          </>
        </Accordion>
        <Accordion heading="Concise Communication" icon={<GiTalk />}>
          <>
            I convey ideas clearly in both written and verbal forms, maintaining
            a{" "}
            <Link
              aria-label="blog"
              className={cn("link")}
              title="View my blog"
              to="/blog"
            >
              blog
            </Link>{" "}
            and performing tech talks at{" "}
            <HashLink
              aria-label="Agile Digital"
              className={cn("link")}
              title="View my projects with Agile Digital"
              to="projects?categories=Agile%2520Digital"
            >
              Agile Digital
            </HashLink>
            . On a project with{" "}
            <HashLink
              aria-label="Toyota Finance Australia"
              className={cn("link")}
              title="View project details"
              to="/projects?reset#Toyota Finance Australia"
            >
              Toyota Finance Australia
            </HashLink>
            , I demonstrated my ability to work with a client of substantial
            scale. As a spokesperson for an{" "}
            <HashLink
              aria-label="ANU TechLauncher project"
              className={cn("link")}
              title="View project details"
              to="/projects?reset#Siding Spring Observatory VR Experience"
            >
              ANU TechLauncher project
            </HashLink>
            , I was granted the award for best pitch.
          </>
        </Accordion>
        <Accordion heading="Quality Code" icon={<BsFillFileEarmarkCodeFill />}>
          <>
            I ensure my code is robust and maintainable by adopting a functional
            programming style. I employ strict typing across the tech stack,
            employ code quality tools like{" "}
            <a
              aria-label="ESLint"
              className={cn("link")}
              href="https://www.npmjs.com/package/@tim-w-james/eslint-config"
              rel="noreferrer"
              target="_blank"
              title="View my custom ESLint config"
            >
              ESLint
            </a>
            , and take a layered approach to testing. I take care to document my
            solutions, and continually address technical debt. By taking
            initiative with {/* // eslint-disable-next-line max-len */}
            <Tooltip isInverted text="DX" tooltip="Developer Experience" />{" "}
            tooling and {/* eslint-disable-next-line max-len */}
            <Tooltip
              isInverted
              text="DevOps"
              tooltip="Developer Operations"
            />{" "}
            infrastructure I am able to boost my productivity. See my{" "}
            <HashLink
              aria-label="core tech stack"
              className={cn("link")}
              title="View my tech stack"
              to="/#technologies"
            >
              core tech stack
            </HashLink>
            .
          </>
        </Accordion>
        <hr className={cn("radial-border my-8")} />
        <Accordion
          heading="CV / Resume"
          icon={<BsFileEarmarkPdfFill />}
          startClosed
        >
          <iframe height="1000px" src={cv} title="CV" width="100%" />
        </Accordion>
        <hr className={cn("radial-border mt-6")} />
      </section>
    </div>
  );
};

export default Skills;
