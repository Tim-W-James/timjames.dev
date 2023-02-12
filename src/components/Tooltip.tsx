import cn from "@styles/cssUtils";

const Tooltip: React.FC<{
  text: string;
  tooltip: string;
  isInverted?: boolean;
}> = ({ text, tooltip, isInverted }) => (
  <span
    className={cn("tooltip", { inverted: Boolean(isInverted) })}
    data-nosnippet
  >
    {text}
    <span className={cn("tooltip-text", { inverted: Boolean(isInverted) })}>
      {tooltip}
    </span>
  </span>
);

export default Tooltip;
