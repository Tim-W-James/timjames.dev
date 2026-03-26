import cn from "@styles/cssUtils";
import FadeIn from "react-fade-in";
import { HashLink } from "react-router-hash-link";

import CredlyBadges from "./CredlyBadges";

const AboutMe: React.FC = () => {
  const badgeIds = [
    "3e2a7963-2ea9-43c4-8550-fac792692b36",
    "389f3969-b65b-4dd3-8df8-537dcb794bca",
    "23372af0-4d55-41e9-a3a3-7d3d55c380fc",
  ] as const;

  const copyFragment = useCallback(
    () =>
      navigator.clipboard.writeText(
        `${location.href.split("#")[0] ?? ""}#about`
      ),
    []
  );

  return (
    <div
      className={cn(
        "mx-auto mb-8 flex place-content-center items-center px-8",
        "flex-col"
      )}
    >
      <FadeIn transitionDuration={200}>
        <h2 id="about">
          <HashLink
            className={cn("hash-link")}
            onClick={copyFragment}
            to="#about"
          >
            About Me{" "}
          </HashLink>
          <hr className={cn("radial-border")} />
        </h2>
        <br />
        <section
          aria-labelledby="about"
          className={cn("flex", "flex-col", "gap-4")}
        >
          <ul className={cn("list-disc text-left text-xl")}>
            <li>
              {}
              💼 <b className={cn("font-bold")}>
                Senior Software Engineer
              </b> at{" "}
              <a
                aria-label="Agile Digital"
                className={cn("link")}
                href="https://github.com/agiledigital"
                rel="noreferrer"
                target="_blank"
                title="Agile Digital Website"
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
                title="ANU"
              >
                Australian National University
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
                title="Location"
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
                title="tim.james.work9800@gmail.com"
              >
                tim.james.work9800@gmail.com
              </a>
            </li>
            <li>🏢 Baseline security clearance and police check (2025)</li>
            <li>
              💻 Member of the{" "}
              <a
                aria-label="ACS"
                className={cn("link")}
                href="https://www.acs.org.au/"
                rel="noreferrer"
                target="_blank"
                title="Australian Computer Society"
              >
                Australian Computer Society
              </a>
            </li>
            <li>
              🏆 View my certifications on{" "}
              <a
                aria-label="Credly"
                className={cn("link")}
                href="https://www.credly.com/users/timjames/badges"
                rel="noreferrer"
                target="_blank"
                title="Certifications"
              >
                Credly
              </a>
            </li>
          </ul>
          <CredlyBadges badgeIds={badgeIds} />
        </section>
      </FadeIn>
    </div>
  );
};

export default AboutMe;
