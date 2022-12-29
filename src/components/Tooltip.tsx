import cn from "@styles/cssUtils";

const Tooltip: React.FC<{ text: string; tooltip: string }> = ({
  text,
  tooltip,
}) => (
  <span className={cn("tooltip")}>
    {text}
    <span className={cn("tooltip-text")}>{tooltip}</span>
  </span>
);

export default Tooltip;
