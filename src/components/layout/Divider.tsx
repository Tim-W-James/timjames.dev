import cn from "@styles/cssUtils";

type DividerProps = {
  /**
   * Text to display in the middle of the divider
   */
  label: string;
  /**
   * Whether the text should be on the left or right side of the divider
   */
  isReversed?: boolean;
};

/**
 * Divider horizontal line with header
 */
const Divider: React.FC<DividerProps> = ({ label, isReversed }) => (
  <div className={cn("relative flex w-full items-center py-5")}>
    {isReversed ? (
      <>
        <div className={`grow ${cn("border-t", "border-main-brand")}`} />
        <span className={`shrink ${cn("ml-4 font-bold text-main-brand")}`}>
          {label}
        </span>
      </>
    ) : (
      <>
        <span className={`shrink ${cn("mr-4 font-bold text-main-brand")}`}>
          {label}
        </span>
        <div className={`grow ${cn("border-t", "border-main-brand")}`} />
      </>
    )}
  </div>
);

export default Divider;
