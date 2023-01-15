import Button from "@components/buttons/Button";
import Timeline from "@features/timeline/components/Timeline";
import timelineData from "@features/timeline/data/timelineData";
import useMediaQuery from "@hooks/useMediaQuery";
import cn from "@styles/cssUtils";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { HashLink } from "react-router-hash-link";

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
      <section aria-labelledby="projects">
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

export default MajorProjects;
