import technologies from "@data/technologies";
import cn from "@styles/cssUtils";
import FadeIn from "react-fade-in";
import { HashLink } from "react-router-hash-link";

const CoreTechnologies: React.FC = () => {
  const copyFragment = useCallback(
    () =>
      navigator.clipboard.writeText(
        `${location.href.split("#")[0] ?? ""}#technologies`
      ),
    []
  );
  return (
    <div
      className={cn(
        "mx-auto mt-8 flex max-w-xl place-content-center items-center",
        "solid-background",
        "flex-col"
      )}
    >
      <FadeIn transitionDuration={200}>
        <h2 id="technologies">
          <HashLink
            className={cn("hash-link")}
            onClick={copyFragment}
            to="#technologies"
          >
            Core Technologies{" "}
          </HashLink>
          <hr className={cn("radial-border")} />
        </h2>
        <br />
        <section
          aria-labelledby="technologies"
          className={cn(
            "flex place-content-center items-center gap-4 text-xl",
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
                  "hover:text-light-accent active:text-dark-accent",
                  "active:underline"
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
      </FadeIn>
    </div>
  );
};

export default CoreTechnologies;
