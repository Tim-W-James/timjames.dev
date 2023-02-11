import Tooltip from "@components/Tooltip";
import cn from "@styles/cssUtils";
import FadeIn from "react-fade-in";
import { HashLink } from "react-router-hash-link";

const AboutMe: React.FC = () => (
  <div
    className={cn(
      // eslint-disable-next-line sonarjs/no-duplicate-string
      "flex mx-auto items-center place-content-center px-8 mb-8",
      "flex-col"
    )}
  >
    <FadeIn transitionDuration={200}>
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
      <section aria-labelledby="about">
        <ul className={cn("list-disc text-xl text-left")}>
          <li>
            💼 <b className={cn("font-bold")}>Software Engineer</b> at{" "}
            <a
              aria-label="Agile Digital"
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
            <b className={cn("font-bold")}>
              Bachelor of Information Technology{" "}
            </b>
            at the{" "}
            <a
              aria-label="Australian National University"
              className={cn("link")}
              href="https://www.anu.edu.au/"
              rel="noreferrer"
              target="_blank"
              title={"ANU"}
            >
              Australian National University
            </a>{" "}
            {/* eslint-disable-next-line max-len */}
            with a{" "}
            <Tooltip isInverted text="GPA" tooltip="Grade Point Average" /> of
            6.3/7
          </li>
          <li>
            📄 View my certifications on{" "}
            <a
              aria-label="Credly"
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
              aria-label="Canberra, Australia"
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
    </FadeIn>
  </div>
);

export default AboutMe;
