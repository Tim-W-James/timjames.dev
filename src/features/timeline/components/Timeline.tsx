import useMediaQuery from "@hooks/useMediaQuery";
import cn, { cnScoped } from "@styles/cssUtils";

import TimelineItemData from "../types/TimelineData";
import styles from "./Timeline.module.scss";
import TimelineItem from "./TimelineItem";

// Adapted from: https://www.florin-pop.com/blog/2019/04/how-to-create-a-timeline-with-react/

type TimelineProps = {
  data: TimelineItemData[];
  filterFunc?: (
    value: TimelineItemData,
    index: number,
    array: TimelineItemData[]
  ) => boolean;
  sortFunc?: (a: TimelineItemData, b: TimelineItemData) => number;
};

/**
 * Displays a timeline of items
 */
const Timeline: React.FC<TimelineProps> = ({
  data: timelineData,
  filterFunc = (value) => value,
  sortFunc = () => 0,
}) => {
  const hasTwoColumns = !useMediaQuery("(max-width: 767px)");
  const filteredTimelineData = useMemo(
    () =>
      timelineData
        .filter(filterFunc)
        .sort((a, b) => {
          const endComparison = b.endDate.getTime() - a.endDate.getTime();
          const startComparison = b.startDate.getTime() - a.startDate.getTime();
          return endComparison !== 0 ? endComparison : startComparison;
        })
        .sort(sortFunc)
        .map((itemData, index) => (
          <TimelineItem
            data={itemData}
            hasTwoColumns={hasTwoColumns}
            index={index}
            key={index}
          />
        )),
    [filterFunc, hasTwoColumns, sortFunc, timelineData]
  );

  return filteredTimelineData.length > 0 ? (
    <>
      {hasTwoColumns ? (
        <hr className={cn("radial-border", "border-2")} />
      ) : null}
      <div
        className={cnScoped(styles)(styles._timelineContainer, {
          [styles._twoColumns]: hasTwoColumns,
        })}
      >
        {filteredTimelineData}
      </div>
    </>
  ) : (
    <div className={cn("mb-8 text-center text-xl ")}>
      <span className={cn("text-danger")}>No Projects Found</span> - Try a
      different filter
    </div>
  );
};

export default Timeline;
