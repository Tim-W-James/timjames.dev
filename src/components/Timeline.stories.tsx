import timelineData from "@constants/timelineData";
import cn from "@styles/cssUtils";
import TimelineComponent from "./Timeline";

export default {
  title: "Components/Timeline",
  component: TimelineComponent,
};

export const Timeline = () => (
  <div className={cn("container mx-auto")}>
    <TimelineComponent data={timelineData} />
  </div>
);
