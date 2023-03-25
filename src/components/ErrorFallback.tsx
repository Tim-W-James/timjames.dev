import cn from "@styles/cssUtils";
import { FallbackProps } from "react-error-boundary";
import { RiRefreshFill } from "react-icons/ri";

import Button from "./buttons/Button";

/**
 * Fallback error display for any unrecoverable errors.
 */
export const ErrorFallback = (props: FallbackProps): JSX.Element => {
  useEffect(() => {
    console.error(new Error("Error loading page:", { cause: props.error }));
  }, [props.error]);

  return (
    <>
      <div className={cn("bg-dark-shades fixed -z-10 h-screen w-screen")} />
      <div className={cn("mt-8  text-center")}>
        <h1
          className={cn("text-light-accent pt-10 text-8xl font-bold")}
          id="error"
        >
          Error
        </h1>
        <h2>
          <span className={cn("text-danger")}>Oops!</span> Something went wrong.
        </h2>
        <h3>Please reload the page and try again.</h3>
        <br />
        <div className={cn("flex items-center justify-center")}>
          <Button
            icon={<RiRefreshFill />}
            isLight
            label="Reload"
            mode="button"
            onClick={props.resetErrorBoundary}
            tooltip="Reload the page"
          />
        </div>
      </div>
    </>
  );
};
