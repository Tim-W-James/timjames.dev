import useDocumentTitle from "@hooks/useDocumentTitle";
import { PRIMARY_TITLE } from "globals";

/**
 * Page Wrapper
 * ------------
 *
 * Wrapper for page content that sets the title.
 */
const Page: React.FC<{
  title?: string;
  content: JSX.Element;
}> = ({ title, content }) => {
  const titleSeparator = " | ";
  useDocumentTitle(`${PRIMARY_TITLE}${title ? titleSeparator + title : ""}`);
  return content;
};

export default Page;
