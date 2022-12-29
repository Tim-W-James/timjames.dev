import technologies from "@constants/technologies";
import { categories } from "@constants/timelineData";
import useMediaQuery from "@hooks/useMediaQuery";
import cn, { cnScoped } from "@styles/cssUtils";
import { motion, useAnimation, useInView } from "framer-motion";
import Divider from "./Divider";
import styles, { ClassNames } from "./Timeline.module.scss";

// Adapted from: https://www.florin-pop.com/blog/2019/04/how-to-create-a-timeline-with-react/

export type TimelineItemData = {
  date: string;
  title: string;
  body: JSX.Element;
  thumbnailSrc?: string;
  category: keyof typeof categories;
  technologies?: (keyof typeof technologies)[];
  starred?: boolean;
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
    rotateX: -90,
    "--rotation-offset": "180deg",
    // https://www.framer.com/docs/component/###animating-css-variables
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } as any,
};

const TitleLink: React.FC<{ data: TimelineItemData; className: string }> = ({
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
        className={cn("text-main-brand uppercase mb-0 leading-snug")}
        id={itemData.title}
      >
        {itemData.title}
      </h3>
      <TitleLink className={cn("text-main-brand text-right")} data={itemData} />
    </>
  ) : (
    <>
      <TitleLink className={cn("text-main-brand text-left")} data={itemData} />
      <h3 className={cn("text-main-brand uppercase mb-0 leading-snug")}>
        {itemData.title}
      </h3>
    </>
  );

const Thumbnail: React.FC<{
  data: TimelineItemData;
  hasTwoColumns: boolean;
  isOddIndex: boolean;
}> = ({ data: itemData, hasTwoColumns, isOddIndex }) =>
  itemData.thumbnailSrc ? (
    <img
      alt={itemData.title}
      className={
        hasTwoColumns
          ? isOddIndex
            ? cn("float-left", "mr-4", "w-1/3")
            : cn("float-right", "ml-4", "w-1/3")
          : "" + cn("max-md:float-none max-md:w-auto max-md:mx-0 max-md:mb-4")
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
          <>
            {index !== itemData.technologies?.length && index !== 0 ? ", " : ""}
            <a
              className={cn("inline-flex items-center")}
              href={technologies[technology].link}
              key={index}
              rel="noreferrer"
              target="_blank"
              title={technology}
            >
              {technology}
              {technologies[technology].icon ? (
                <>
                  {"\u00A0"}
                  {technologies[technology].icon}
                </>
              ) : null}
            </a>
          </>
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
          <>
            {index !== itemData.technologies?.length && index !== 0
              ? " - "
              : ""}
            <a
              className={cn("link")}
              href={link.url}
              key={index}
              rel="noreferrer"
              target="_blank"
              title={link.text}
            >
              {link.text}
              {link.icon ? <> {link.icon}</> : ""}
            </a>
          </>
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
    >
      <div>
        <motion.div
          animate={control}
          className={cnScoped<ClassNames>()(styles._timelineItemContent)}
          initial="hidden"
          ref={ref}
          variants={itemAnimationVariants}
        >
          <div className={cn("flex w-full justify-between gap-2")}>
            <Title data={itemData} isOddIndex={isOddIndex} />
          </div>
          <h4 className={cn("text-main-brand")}>
            <time>{itemData.date}</time>
          </h4>
          <div>
            <Thumbnail
              data={itemData}
              hasTwoColumns={hasTwoColumns}
              isOddIndex={isOddIndex}
            />
            <p>{itemData.body}</p>
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
 * @param {{ data; }} {
  data to be displayed in the timeline,
}
 */
const Timeline: React.FC<{ data: TimelineItemData[] }> = ({
  data: timelineData,
}) => {
  const hasTwoColumns = !useMediaQuery("(max-width: 768px)");

  return timelineData.length > 0 ? (
    <>
      {hasTwoColumns ? <hr className={cn("radial-border border-2")} /> : null}
      <div
        className={cnScoped<ClassNames>()(styles._timelineContainer, {
          [styles._twoColumns]: hasTwoColumns,
        })}
      >
        {timelineData.map((itemData, index) => (
          <TimelineItem
            data={itemData}
            hasTwoColumns={hasTwoColumns}
            index={index}
            key={index}
          />
        ))}
      </div>
    </>
  ) : null;
};

export default Timeline;
