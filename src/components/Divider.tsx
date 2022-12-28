import cn from "@styles/cssUtils";

const Divider: React.FC<{ label: string; isReversed?: boolean }> = ({
  label,
  isReversed,
}) => (
  <div className={cn()("relative flex py-5 items-center w-full")}>
    {isReversed ? (
      <>
        <div className={"flex-grow " + cn()("border-t border-main-brand")} />
        <span
          className={"flex-shrink " + cn()("ml-4 font-bold text-main-brand")}
        >
          {label}
        </span>
      </>
    ) : (
      <>
        <span
          className={"flex-shrink " + cn()("mr-4 font-bold text-main-brand")}
        >
          {label}
        </span>
        <div className={"flex-grow " + cn()("border-t border-main-brand")} />
      </>
    )}
  </div>
);

export default Divider;
