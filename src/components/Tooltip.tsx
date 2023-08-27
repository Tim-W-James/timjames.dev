import cn from "@styles/cssUtils";

type TooltipProps = {
  text: string;
  tooltip: string;
  isInverted?: boolean;
};

/**
 * Tooltip to display additional information on hover
 */
const Tooltip: React.FC<TooltipProps> = ({ text, tooltip, isInverted }) => (
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
