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
      <div className={cn("fixed w-screen h-screen bg-dark-shades -z-10")} />
      <div className={cn("text-center  mt-8")}>
        <h1
          className={cn("text-8xl pt-10 text-light-accent font-bold")}
          id="error"
        >
          Error
        </h1>
        <h2>
          <span className={cn("text-danger")}>Oops!</span> Something went wrong.
        </h2>
        <h3>Please reload the page and try again.</h3>
        <br />
        <div className="flex justify-center items-center">
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
