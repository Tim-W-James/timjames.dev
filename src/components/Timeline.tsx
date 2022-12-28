import {
  TimelineItemData,
  categories,
  technologies,
} from "@constants/timelineData";
import useMediaQuery from "@hooks/useMediaQuery";
import cn from "@styles/cssUtils";
import { motion, useAnimation, useInView } from "framer-motion";
import Divider from "./Divider";
import styles, { ClassNames } from "./Timeline.module.scss";

// Adapted from: https://www.florin-pop.com/blog/2019/04/how-to-create-a-timeline-with-react/

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
      className={cn<ClassNames>()(styles._timelineItem, {
        [styles._twoColumns]: hasTwoColumns,
      })}
    >
      <div>
        <motion.div
          animate={control}
          className={cn<ClassNames>()(styles._timelineItemContent)}
          initial="hidden"
          ref={ref}
          variants={itemAnimationVariants}
        >
          <div className={cn()("flex w-full justify-between gap-2")}>
            {isOddIndex ? (
              <>
                <h3
                  className={cn()(
                    "text-main-brand uppercase mb-0 leading-snug"
                  )}
                >
                  {itemData.title}
                </h3>
                {categories[itemData.category].link ? (
                  <a
                    className={cn()("text-main-brand text-right")}
                    href={categories[itemData.category].link}
                    rel="noreferrer"
                    target="_blank"
                    title={itemData.category}
                  >
                    {itemData.category}
                  </a>
                ) : (
                  <span className={cn()("text-main-brand text-right")}>
                    {itemData.category}
                  </span>
                )}
              </>
            ) : (
              <>
                {categories[itemData.category].link ? (
                  <a
                    className={cn()("text-main-brand text-left")}
                    href={categories[itemData.category].link}
                    rel="noreferrer"
                    target="_blank"
                    title={itemData.category}
                  >
                    {itemData.category}
                  </a>
                ) : (
                  <span className={cn()("text-main-brand text-left")}>
                    {itemData.category}
                  </span>
                )}
                <h3
                  className={cn()(
                    "text-main-brand uppercase mb-0 leading-snug"
                  )}
                >
                  {itemData.title}
                </h3>
              </>
            )}
          </div>
          <h4 className={cn()("text-main-brand")}>
            <time>{itemData.date}</time>
          </h4>
          <div>
            {itemData.thumbnailSrc ? (
              <img
                alt={itemData.title}
                className={
                  hasTwoColumns
                    ? isOddIndex
                      ? "float-left mr-4 w-1/3 "
                      : "float-right ml-4 w-1/3 "
                    : "" +
                      cn<ClassNames>()(
                        "max-md:float-none max-md:w-auto max-md:mx-0 max-md:mb-4"
                      )
                }
                src={itemData.thumbnailSrc}
              />
            ) : null}
            <p>{itemData.text}</p>
          </div>
          {itemData.technologies && (
            <>
              <Divider isReversed={!isOddIndex} label="Technologies" />

              <div>
                {itemData.technologies.map((technology, index) => (
                  <>
                    {index !== itemData.technologies?.length && index !== 0
                      ? ", "
                      : ""}
                    {technologies[technology].link ? (
                      <a
                        className={cn()("inline-flex items-center")}
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
                    ) : (
                      <span key={index}>
                        {technology}
                        {technologies[technology].icon ? (
                          <> {technologies[technology].icon}</>
                        ) : (
                          ""
                        )}
                      </span>
                    )}
                  </>
                ))}
              </div>
            </>
          )}
          {itemData.links && (
            <>
              <Divider isReversed={!isOddIndex} label="Links" />

              <div>
                {itemData.links.map((link, index) => (
                  <>
                    {index !== itemData.technologies?.length && index !== 0
                      ? " - "
                      : ""}
                    <a
                      className={cn()("link")}
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
          )}
        </motion.div>
        <span className={cn<ClassNames>()(styles._circle)} />
      </div>
    </div>
  );
};

const Timeline: React.FC<{ data: TimelineItemData[] }> = ({
  data: timelineData,
}) => {
  const hasTwoColumns = !useMediaQuery("(max-width: 768px)");

  return timelineData.length > 0 ? (
    <>
      {hasTwoColumns ? <hr className={cn()("radial-border border-2")} /> : null}
      <div
        className={cn<ClassNames>()(styles._timelineContainer, {
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
