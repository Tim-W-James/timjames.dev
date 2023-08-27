import Button from "@components/buttons/Button";
import CopyToClipboard from "react-copy-to-clipboard";
import { MdCheckCircle, MdContentCopy } from "react-icons/md";

/**
 * Button to copy text to clipboard
 */
const CopyTextButton: React.FC<{
  stringToCopy: string;
  buttonClasses?: string;
}> = ({ stringToCopy, buttonClasses }) => {
  const [showTick, setShowTick] = useState(false);
  return (
    <CopyToClipboard
      onCopy={() => {
        setShowTick(true);
        setTimeout(() => setShowTick(false), 2500);
      }}
      text={stringToCopy}
    >
      <Button
        className={buttonClasses}
        icon={showTick ? <MdCheckCircle /> : <MdContentCopy />}
        isLabelHidden
        label="Copy code to clipboard"
        mode="button"
        tooltip="Copy code to clipboard"
      />
    </CopyToClipboard>
  );
};

export default CopyTextButton;
