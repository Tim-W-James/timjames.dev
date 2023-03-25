import cn from "@styles/cssUtils";

/**
 * Divider horizontal line with header
 *
 * @param {{ label; isReversed; }} {
  text to display in the middle of the divider,
  whether the text should be on the left or right side of the
  divider
}
 */
const Divider: React.FC<{ label: string; isReversed?: boolean }> = ({
  label,
  isReversed,
}) => (
  <div className={cn("relative flex w-full items-center py-5")}>
    {isReversed ? (
      <>
        <div className={`grow ${cn("border-t", "border-main-brand")}`} />
        <span className={`shrink ${cn("text-main-brand ml-4 font-bold")}`}>
          {label}
        </span>
      </>
    ) : (
      <>
        <span className={`shrink ${cn("text-main-brand mr-4 font-bold")}`}>
          {label}
        </span>
        <div className={`grow ${cn("border-t", "border-main-brand")}`} />
      </>
    )}
  </div>
);

export default Divider;
