import useDocumentMeta from "@hooks/useDocumentMeta";
import cn from "@styles/cssUtils";

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
  content: JSX.Element;
}> = ({ title, description, canonical, nonStandardLayout, content }) => {
  useDocumentMeta(title, description, canonical);

  // Only show the reCAPTCHA badge on specific routes
  useEffect(() => {
    const badge = document.querySelector(".grecaptcha-badge");
    badge &&
      (title === "Contact"
        ? badge.classList.add("captcha-show")
        : badge.classList.remove("captcha-show"));
  }, [title]);

  return nonStandardLayout ? (
    content
  ) : (
    <>
      <div className={cn("fixed bg-dark-shades w-screen h-screen -z-10")} />
      <div className={cn("my-10 mx-auto pt-10 px-8 container")}>
        <header
          className={cn(
            "flex mx-auto items-center place-content-center px-8 text-center",
            "flex-col"
          )}
        >
          <h1 className={cn("text-light-accent font-bold")} id={title}>
            {title}
            <hr className={cn("radial-border")} />
          </h1>
        </header>
        <main>{content}</main>
      </div>
    </>
  );
};

export default Page;
