import cn from "@styles/cssUtils";
import { ToastContainer } from "react-toastify";

const Toast: React.FC = () => {
  const toastStyles = useCallback(
    () =>
      cn(
        "text-light-shades bg-dark-shades",
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
    () => cn("block flex p-3 text-sm", "text-light-shades bg-dark-shades"),
    []
  );

  return (
    <ToastContainer
      autoClose={3000}
      bodyClassName={toastBodyStyles}
      position="top-right"
      style={{ top: "80px" }}
      theme="dark"
      toastClassName={toastStyles}
    />
  );
};

export default Toast;
