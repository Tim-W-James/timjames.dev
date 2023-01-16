import cn from "@styles/cssUtils";
import { AnimatePresence, motion } from "framer-motion";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";

const Accordion: React.FC<{
  heading: string;
  icon: JSX.Element;
  body: JSX.Element;
  startClosed?: boolean;
}> = ({ heading, icon, body, startClosed }) => {
  const [isOpen, setIsOpen] = useState(!startClosed);

  return (
    <div className={cn("mb-4")}>
      <motion.button
        aria-controls={`${heading}-content`}
        aria-expanded={isOpen}
        className={cn(
          "mb-2 p-2 text-light-accent cursor-pointer min-w-0",
          "hover:text-dark-accent active:text-main-brand",
          "inline-flex w-full acrylic-dark items-center",
          "rounded-md",
          "gap-2"
        )}
        onClick={() => setIsOpen((prev) => !prev)}
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
      </motion.button>
      <AnimatePresence>
        {isOpen ? (
          <motion.section
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
          </motion.section>
        ) : (
          ""
        )}
      </AnimatePresence>
    </div>
  );
};

export default Accordion;
