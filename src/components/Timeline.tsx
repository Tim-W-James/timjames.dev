import technologies from "@constants/technologies";
import { categories } from "@constants/timelineData";
import useMediaQuery from "@hooks/useMediaQuery";
import cn, { cnScoped } from "@styles/cssUtils";
import { motion, useAnimation, useInView } from "framer-motion";
import Divider from "./Divider";
import styles, { ClassNames } from "./Timeline.module.scss";

// Adapted from: https://www.florin-pop.com/blog/2019/04/how-to-create-a-timeline-with-react/

export type TimelineItemData = {
  startDate: Date;
  endDate: Date;
  title: string;
  body: JSX.Element;
  thumbnailSrc?: string;
  category: keyof typeof categories;
  technologies?: (keyof typeof technologies)[];
  isFeatured?: boolean;
  links?: {
    text: string;
    url: string;
    icon?: JSX.Element;
  }[];
};

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

const Category: React.FC<{ data: TimelineItemData; className: string }> = ({
  data: itemData,
  className,
}) =>
  categories[itemData.category].link ? (
    <a
      className={className}
      href={categories[itemData.category].link}
      rel="noreferrer"
      target="_blank"
      title={itemData.category}
    >
      {itemData.category}
    </a>
  ) : (
    <span className={className}>{itemData.category}</span>
  );

const Title: React.FC<{ isOddIndex: boolean; data: TimelineItemData }> = ({
  isOddIndex,
  data: itemData,
}) =>
  isOddIndex ? (
    <>
      <h3
        className={cn(
          "text-main-brand uppercase mb-0 leading-snug",
          "flex-grow",
          "basis-min-content"
        )}
      >
        {itemData.title}
      </h3>
      <Category className={cn("text-main-brand text-right")} data={itemData} />
    </>
  ) : (
    <>
      <Category className={cn("text-main-brand text-left")} data={itemData} />
      <h3
        className={cn(
          "text-main-brand uppercase mb-0 leading-snug",
          "flex-grow"
        )}
      >
        {itemData.title}
      </h3>
    </>
  );

const Thumbnail: React.FC<{
  data: TimelineItemData;
  isOddIndex: boolean;
}> = ({ data: itemData, isOddIndex }) =>
  itemData.thumbnailSrc ? (
    <img
      alt={itemData.title}
      className={
        "2xl:w-1/3 2xl:basis-content " +
        (isOddIndex
          ? "2xl:order-1 "
          : "" + cn("max-2xl:w-auto max-2xl:ml-auto max-2xl:mb-4"))
      }
      src={itemData.thumbnailSrc}
    />
  ) : null;

const TechnologyList: React.FC<{
  data: TimelineItemData;
  isOddIndex: boolean;
}> = ({ data: itemData, isOddIndex }) =>
  itemData.technologies ? (
    <>
      <Divider isReversed={!isOddIndex} label="Technologies" />

      <div>
        {itemData.technologies.map((technology, index) => (
          <span key={index}>
            {" "}
            <a
              className={cn("inline-flex items-center")}
              href={technologies[technology].link}
              rel="noreferrer"
              target="_blank"
              title={technology}
            >
              {technologies[technology].icon ? (
                <>
                  {technologies[technology].icon}
                  {"\u00A0"}
                </>
              ) : null}
              {technology}
              {index < itemData.technologies!.length - 1 ? "," : ""}
            </a>
          </span>
        ))}
      </div>
    </>
  ) : null;

const LinksList: React.FC<{ data: TimelineItemData; isOddIndex: boolean }> = ({
  data: itemData,
  isOddIndex,
}) =>
  itemData.links ? (
    <>
      <Divider isReversed={!isOddIndex} label="Links" />

      <div>
        {itemData.links.map((link, index) => (
          <span key={index}>
            {index !== itemData.links?.length && index !== 0 ? " - " : ""}
            <a
              className={cn("link")}
              href={link.url}
              rel="noreferrer"
              target="_blank"
              title={link.text}
            >
              {link.icon ? <>{link.icon} </> : ""}
              {link.text}
            </a>
          </span>
        ))}
      </div>
    </>
  ) : null;

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
    <div
      className={cnScoped<ClassNames>()(styles._timelineItem, {
        [styles._twoColumns]: hasTwoColumns,
      })}
      id={itemData.title}
    >
      <div>
        <motion.div
          animate={control}
          className={cnScoped<ClassNames>()(styles._timelineItemContent)}
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
            <Title data={itemData} isOddIndex={isOddIndex} />
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
            <Thumbnail data={itemData} isOddIndex={isOddIndex} />
            <p className={cn("hyphens-none")}>{itemData.body}</p>
          </div>
          <TechnologyList data={itemData} isOddIndex={isOddIndex} />
          <LinksList data={itemData} isOddIndex={isOddIndex} />
        </motion.div>
        <span className={cnScoped<ClassNames>()(styles._circle)} />
      </div>
    </div>
  );
};

/**
 * Displays a timeline of items
 *
 * @param {{ data; filterFunc; sortFunc; }} {
  data to be displayed in the timeline,
  filter for timeline data,
  sort for timeline data
}
 */
const Timeline: React.FC<{
  data: TimelineItemData[];
  filterFunc?: (
    value: TimelineItemData,
    index: number,
    array: TimelineItemData[]
  ) => boolean;
  sortFunc?: (a: TimelineItemData, b: TimelineItemData) => number;
}> = ({
  data: timelineData,
  filterFunc = (value) => value,
  sortFunc = () => 0,
}) => {
  const hasTwoColumns = !useMediaQuery("(max-width: 767px)");
  const filteredTimelineData = timelineData
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
    ));

  return filteredTimelineData.length > 0 ? (
    <>
      {hasTwoColumns ? <hr className={cn("radial-border border-2")} /> : null}
      <div
        className={cnScoped<ClassNames>()(styles._timelineContainer, {
          [styles._twoColumns]: hasTwoColumns,
        })}
      >
        {filteredTimelineData}
      </div>
    </>
  ) : (
    <div className={cn("text-center mb-8 text-xl ")}>
      <span className={cn("text-danger")}>No Projects Found</span> - Try a
      different filter
    </div>
  );
};

export default Timeline;
