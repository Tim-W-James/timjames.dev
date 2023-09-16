import cn from "@styles/cssUtils";
import { AnimatePresence, domAnimation, LazyMotion, m } from "framer-motion";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";

export type AccordionProps = {
  heading: string;
  icon: JSX.Element;
  children: JSX.Element;
  startClosed?: boolean;
};

/**
 * Togglable accordion
 */
const Accordion: React.FC<AccordionProps> = ({
  heading,
  icon,
  children,
  startClosed,
}) => {
  const [isOpen, setIsOpen] = useState(!startClosed);

  const toggleIsOpen = useCallback(() => setIsOpen((prev) => !prev), []);

  return (
    <div className={cn("mb-4")}>
      <LazyMotion features={domAnimation}>
        <m.button
          aria-expanded={isOpen}
          className={cn(
            "mb-2 min-w-0 cursor-pointer p-2 text-light-accent",
            "hover:text-dark-accent active:text-main-brand",
            "acrylic-dark w-full items-center",
            "inline-flex",
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
              {children}
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
