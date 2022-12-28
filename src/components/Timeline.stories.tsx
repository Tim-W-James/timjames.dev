import timelineData from "@constants/timelineData";
import TimelineComponent from "./Timeline";

export default {
  title: "Components/Timeline",
  component: TimelineComponent,
};

export const Timeline = () => <TimelineComponent data={timelineData} />;
