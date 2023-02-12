import cn from "@styles/cssUtils";
import { AnimatePresence, LazyMotion, domAnimation, m } from "framer-motion";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";

const Accordion: React.FC<{
  heading: string;
  icon: JSX.Element;
  body: JSX.Element;
  startClosed?: boolean;
}> = ({ heading, icon, body, startClosed }) => {
  const [isOpen, setIsOpen] = useState(!startClosed);

  const toggleIsOpen = useCallback(() => setIsOpen((prev) => !prev), []);

  return (
    <div className={cn("mb-4")}>
      <LazyMotion features={domAnimation}>
        <m.button
          aria-expanded={isOpen}
          className={cn(
            "mb-2 p-2 text-light-accent cursor-pointer min-w-0",
            "hover:text-dark-accent active:text-main-brand",
            "inline-flex w-full acrylic-dark items-center",
            "rounded-md",
            "gap-2"
          )}
          onClick={toggleIsOpen}
        >
          {icon}
          <h3 className={cn("mb-1 grow text-left")} id={heading}>
            {heading}
          </h3>
          {isOpen ? (
            <MdArrowDropUp className={cn("text-3xl")} />
          ) : (
            <MdArrowDropDown className={cn("text-3xl")} />
          )}
        </m.button>
        <AnimatePresence>
          {isOpen ? (
            <m.section
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.25,
                },
              }}
              aria-labelledby={heading}
              className={cn("hyphens-none text-left")}
              exit={{
                opacity: 0,
                y: "-10%",
                transition: {
                  duration: 0.25,
                },
              }}
              id={`${heading}-content`}
              initial={{ opacity: 0, y: "-10%" }}
            >
              {body}
            </m.section>
          ) : (
            ""
          )}
        </AnimatePresence>
      </LazyMotion>
    </div>
  );
};

export default Accordion;
