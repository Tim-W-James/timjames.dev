import { useTouchInputQuery } from "@hooks/useMediaQuery";
import { domAnimation, LazyMotion, m } from "framer-motion";

// Adapted from: https://github.com/ipenywis/react-navbar-responsive

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Path = (props: any) => (
  <LazyMotion features={domAnimation}>
    <m.path
      fill="transparent"
      strokeLinecap="round"
      strokeWidth="3"
      {...props}
    />
  </LazyMotion>
);

const transition = { duration: 0.11 };

/**
 * Description placeholder
 *
 * @param {{ toggle; isOpen; baseColor; hoverColor; }} {
 * function to run on toggle, whether the menu is open, base color, hover color
 * }
 */
const MenuToggle: React.FC<{
  toggle: () => void;
  isOpen: boolean;
  baseColor: string;
  hoverColor: string;
}> = ({ toggle, isOpen, baseColor, hoverColor }) => {
  const [isHovered, setHovered] = useState(false);
  const deviceIsTouch = useTouchInputQuery();
  const color = isHovered && !deviceIsTouch ? hoverColor : baseColor;

  const enableHover = useCallback(() => setHovered(true), []);
  const disableHover = useCallback(() => setHovered(false), []);

  return (
    <button
      aria-label="Open Navigation Menu"
      onClick={toggle}
      onMouseEnter={enableHover}
      onMouseLeave={disableHover}
      type="button"
    >
      <svg height="50" viewBox="-1 -3 25 25" width="50">
        <Path
          animate={isOpen ? "open" : "closed"}
          initial={false}
          transition={transition}
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5", stroke: color },
            open: { d: "M 3 16.5 L 17 2.5", stroke: color },
          }}
        />
        <Path
          animate={isOpen ? "open" : "closed"}
          d="M 2 9.423 L 20 9.423"
          initial={false}
          stroke={color}
          transition={transition}
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
        />
        <Path
          animate={isOpen ? "open" : "closed"}
          initial={false}
          transition={transition}
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346", stroke: color },
            open: { d: "M 3 2.5 L 17 16.346", stroke: color },
          }}
        />
      </svg>
    </button>
  );
};

export default MenuToggle;
