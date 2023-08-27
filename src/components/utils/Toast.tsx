import cn from "@styles/cssUtils";
import { ToastContainer } from "react-toastify";

/**
 * Toast container for displaying notifications
 */
const Toast: React.FC = () => {
  const toastStyles = useCallback(
    () =>
      cn(
        "bg-dark-shades text-light-shades",
        "relative flex p-1",
        "min-h-10",
        "rounded-md",
        "cursor-pointer justify-between overflow-hidden",
        "border-[1px]",
        "border-light-shades"
      ),
    []
  );

  const toastBodyStyles = useCallback(
    () => cn("block flex p-3 text-sm", "bg-dark-shades text-light-shades"),
    []
  );

  return (
    <ToastContainer
      // Auto close disabled for accessibility
      autoClose={false}
      bodyClassName={toastBodyStyles}
      position="top-right"
      style={{ top: "80px" }}
      theme="dark"
      toastClassName={toastStyles}
    />
  );
};

export default Toast;
