import cn, { cnScoped } from "@styles/cssUtils";
import { motion, useAnimation, useInView } from "framer-motion";
import { TimelineItemData } from "../data/timelineData";
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
    // https://www.framer.com/docs/component/###animating-css-variables
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } as any,
  hidden: {
    opacity: 0,
    rotateX: -50,
    "--rotation-offset": "180deg",
    // https://www.framer.com/docs/component/###animating-css-variables
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } as any,
};

const TimelineItem: React.FC<{
  data: TimelineItemData;
  index: number;
  hasTwoColumns: boolean;
}> = ({ data: itemData, index, hasTwoColumns }) => {
  const control = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref);
  const isOddIndex = index % 2 === 0 && hasTwoColumns;

  useEffect(() => {
    if (isInView) {
      control.start("visible");
    } else {
      control.start("hidden");
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
        <motion.div
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
          <div className={"2xl:flex 2xl:gap-4 " + cn("items-center")}>
            <ItemThumbnail data={itemData} isOddIndex={isOddIndex} />
            <p className={cn("hyphens-none")}>{itemData.body}</p>
          </div>
          <ItemTechnologyList data={itemData} isOddIndex={isOddIndex} />
          <ItemLinksList data={itemData} isOddIndex={isOddIndex} />
        </motion.div>
        <span className={cnScoped(styles)(styles._circle)} />
      </div>
    </section>
  );
};

export default TimelineItem;
