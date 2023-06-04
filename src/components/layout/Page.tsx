import { ErrorFallback } from "@components/ErrorFallback";
import useDocumentMeta from "@hooks/useDocumentMeta";
import cn from "@styles/cssUtils";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { CgSpinner } from "react-icons/cg";

const Spinner: React.FC = () => (
  <div className={cn("flex justify-center")}>
    <span
      className={cn(
        "inline-block",
        "leading-0",
        "animate-spin",
        "text-7xl text-light-accent"
      )}
    >
      <CgSpinner />
    </span>
  </div>
);

/**
 * Wrapper for page content that sets the title.
 *
 * @param {{ title; content; }} { page title, inner content }
 */
const Page: React.FC<{
  title?: string;
  description?: string;
  canonical?: string;
  nonStandardLayout?: boolean;
  fallback?: JSX.Element;
  content: JSX.Element;
}> = ({
  title,
  description,
  canonical,
  nonStandardLayout,
  content,
  fallback,
}) => {
  useDocumentMeta(title, description, canonical);

  // Only show the reCAPTCHA badge on specific routes
  useEffect(() => {
    const badge = document.querySelector(".grecaptcha-badge");
    badge &&
      (title === "Contact"
        ? badge.classList.add("captcha-show")
        : badge.classList.remove("captcha-show"));
  }, [title]);

  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      // eslint-disable-next-line react/jsx-no-bind
      onReset={() => window.location.reload()}
    >
      {nonStandardLayout ? (
        <Suspense fallback={fallback}>{content}</Suspense>
      ) : (
        <>
          <div className={cn("fixed -z-10 h-screen w-screen bg-dark-shades")} />
          <div className={cn("container mx-auto my-10 px-8 pt-10")}>
            <header
              className={cn(
                "mx-auto flex place-content-center items-center",
                "px-8 text-center",
                "flex-col"
              )}
            >
              <h1 className={cn("font-bold text-light-accent")} id={title}>
                {title}
                <hr className={cn("radial-border")} />
              </h1>
            </header>
            <main>
              <Suspense fallback={fallback ?? <Spinner />}>{content}</Suspense>
            </main>
          </div>
        </>
      )}
    </ErrorBoundary>
  );
};

export default Page;
