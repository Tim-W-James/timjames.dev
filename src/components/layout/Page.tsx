import { PRIMARY_TITLE } from "@constants/content";
import useDocumentTitle from "@hooks/useDocumentTitle";
import cn from "@styles/cssUtils";

/**
 * Wrapper for page content that sets the title.
 *
 * @param {{ title: any; content: any; }} { page title, inner content }
 * @returns {*}
 */
const Page: React.FC<{
  title?: string;
  isStandardLayout?: boolean;
  content: JSX.Element;
}> = ({ title, isStandardLayout, content }) => {
  const titleSeparator = " | ";
  const defaultTitle = "Software Dev";
  useDocumentTitle(
    `${PRIMARY_TITLE}${titleSeparator}${title ? title : defaultTitle}`
  );
  return isStandardLayout ? (
    <>
      {" "}
      <div className={cn()("fixed bg-dark w-screen h-screen -z-10")} />
      <div className={cn()("my-10 mx-auto pt-10 container")}>{content}</div>
    </>
  ) : (
    content
  );
};

export default Page;
