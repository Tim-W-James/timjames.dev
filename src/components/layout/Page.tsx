import { DEFAULT_SUB_TITLE, PRIMARY_TITLE } from "@constants/content";
import useDocumentTitle from "@hooks/useDocumentTitle";
import cn from "@styles/cssUtils";

/**
 * Wrapper for page content that sets the title.
 *
 * @param {{ title; content; }} { page title, inner content }
 */
const Page: React.FC<{
  title?: string;
  nonStandardLayout?: boolean;
  content: JSX.Element;
}> = ({ title, nonStandardLayout, content }) => {
  const titleSeparator = " | ";
  useDocumentTitle(
    `${PRIMARY_TITLE}${titleSeparator}${title ? title : DEFAULT_SUB_TITLE}`
  );
  return nonStandardLayout ? (
    content
  ) : (
    <>
      {" "}
      <div className={cn("fixed bg-dark w-screen h-screen -z-10")} />
      <div className={cn("my-10 mx-auto pt-10 px-8 container")}>
        <header
          className={cn(
            "flex mx-auto items-center place-content-center px-8",
            "flex-col"
          )}
        >
          <h1 className={cn("text-light-accent font-bold")} id={title}>
            {title}
            <hr className={cn("radial-border")} />
          </h1>
        </header>
        {content}
      </div>
    </>
  );
};

export default Page;
