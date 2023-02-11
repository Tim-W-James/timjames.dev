import technologies from "@data/technologies";
import cn from "@styles/cssUtils";
import { HashLink } from "react-router-hash-link";

const CoreTechnologies: React.FC = () => (
  <div
    className={cn(
      "flex mt-8 mx-auto max-w-2xl items-center place-content-center",
      "solid-background",
      "flex-col"
    )}
  >
    <h2 id="technologies">
      <HashLink
        className={cn("hash-link")}
        onClick={() =>
          navigator.clipboard.writeText(
            `${location.href.split("#")[0] || ""}#technologies`
          )
        }
        to={"#technologies"}
      >
        Core Technologies{" "}
      </HashLink>
      {/* eslint-disable-next-line sonarjs/no-duplicate-string */}
      <hr className={cn("radial-border")} />
    </h2>
    <br />
    <section
      aria-labelledby="technologies"
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
            aria-label={key}
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

export default CoreTechnologies;
