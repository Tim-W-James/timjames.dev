import cn from "@styles/cssUtils";
import { FallbackProps } from "react-error-boundary";
import { RiRefreshFill } from "react-icons/ri";

import Button from "./buttons/Button";

/**
 * Fallback error display for any unrecoverable errors.
 */
export const ErrorFallback = ({
  error,
  resetErrorBoundary,
}: FallbackProps): JSX.Element => {
  useEffect(() => {
    console.error(new Error("Error loading page:", { cause: error }));
  }, [error]);

  return (
    <>
      <div
        className={cn("fixed -z-10 -mt-5 h-screen w-screen bg-dark-shades")}
      />
      <div className={cn("mt-8  text-center")}>
        <h1 className={cn("text-8xl font-bold text-light-accent")} id="error">
          Error
        </h1>
        <h2>
          <span className={cn("text-danger")}>Oops!</span> Something went wrong.
        </h2>
        <h3>Please reload the page and try again.</h3>
        <br />
        <div className={cn("flex items-center justify-center")}>
          <Button
            childProps={{ onClick: resetErrorBoundary }}
            icon={<RiRefreshFill />}
            isLight
            label="Reload"
            mode="button"
            tooltip="Reload the page"
          />
        </div>
      </div>
    </>
  );
};
