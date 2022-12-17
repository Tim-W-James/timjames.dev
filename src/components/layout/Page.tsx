import { PRIMARY_TITLE } from "@constants/content";
import useDocumentTitle from "@hooks/useDocumentTitle";

/**
 * Wrapper for page content that sets the title.
 *
 * @param {{ title: any; content: any; }} { page title, inner content }
 * @returns {*}
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
