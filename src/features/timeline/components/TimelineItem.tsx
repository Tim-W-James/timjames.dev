import cn, { cnScoped } from "@styles/cssUtils";
import {
  domAnimation,
  LazyMotion,
  m,
  useAnimation,
  useInView,
} from "framer-motion";
import { isSafari } from "react-device-detect";

import TimelineItemData from "../types/TimelineData";
import ItemLinksList from "./ItemLinksList";
import ItemTechnologyList from "./ItemTechnologyList";
import ItemThumbnail from "./ItemThumbnail";
import ItemTitle from "./ItemTitle";
import styles from "./Timeline.module.scss";

const itemAnimationVariants = {
  visible: {
    opacity: 1,
    rotateX: 0,
    "--rotation-offset": "0deg",
    transition: { duration: 0.25 },
  },
  hidden: {
    opacity: 0,
    rotateX: -50,
    "--rotation-offset": "180deg",
  },
};

type TimelineItemProps = {
  data: TimelineItemData;
  index: number;
  hasTwoColumns: boolean;
};

const TimelineItem: React.FC<TimelineItemProps> = ({
  data: itemData,
  index,
  hasTwoColumns,
}) => {
  const control = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref);
  const isOddIndex = index % 2 === 0 && hasTwoColumns;

  useEffect(() => {
    if (isInView || isSafari) {
      void control.start("visible");
    } else {
      void control.start("hidden");
    }
  }, [control, isInView]);

  return (
    <section
      aria-label={itemData.title}
      className={cnScoped(styles)(styles._timelineItem, {
        [styles._twoColumns]: hasTwoColumns,
      })}
      id={itemData.title}
    >
      <div>
        <LazyMotion features={domAnimation}>
          <m.div
            animate={control}
            className={cnScoped(styles)(styles._timelineItemContent)}
            initial="hidden"
            ref={ref}
            variants={itemAnimationVariants}
          >
            <div
              className={cn(
                "flex w-full gap-2",
                isOddIndex ? "flex-wrap" : "flex-wrap-reverse",
                isOddIndex ? "justify-start" : "justify-end"
              )}
            >
              <ItemTitle data={itemData} isOddIndex={isOddIndex} />
            </div>
            <h4 className={cn("text-main-brand")}>
              <time>
                {itemData.startDate.getFullYear()}
                {itemData.startDate.getFullYear() !==
                itemData.endDate.getFullYear()
                  ? ` - ${itemData.endDate.getFullYear()}`
                  : ""}
              </time>
            </h4>
            <div className={cn("items-center", "xl:flex", "xl:gap-4")}>
              <ItemThumbnail data={itemData} isOddIndex={isOddIndex} />
              <p className={cn("hyphens-none")}>{itemData.body}</p>
            </div>
            <ItemTechnologyList data={itemData} isOddIndex={isOddIndex} />
            <ItemLinksList data={itemData} isOddIndex={isOddIndex} />
          </m.div>
        </LazyMotion>
        <span className={cnScoped(styles)(styles._circle)} />
      </div>
    </section>
  );
};

export default TimelineItem;
