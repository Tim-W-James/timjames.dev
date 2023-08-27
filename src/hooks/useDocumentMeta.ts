import {
  DEFAULT_DESCRIPTION,
  DEFAULT_SUB_TITLE,
  PRIMARY_TITLE,
  TITLE_SEPARATOR,
} from "@constants/content";
import { useEffect } from "react";

/**
 * Set the document meta attributes
 *
 * @param title meta title
 * @param description meta description
 */
const useDocumentMeta = (
  title?: string,
  description?: string,
  canonical?: string
) => {
  useEffect(() => {
    document.title = title
      ? `${title}${TITLE_SEPARATOR}${PRIMARY_TITLE}`
      : `${PRIMARY_TITLE}${TITLE_SEPARATOR}${DEFAULT_SUB_TITLE}`;

    const descriptionRef = document.querySelector("meta[name='description']");
    descriptionRef?.setAttribute(
      "content",
      description ? description : DEFAULT_DESCRIPTION
    );

    const canonicalRef = document.querySelector("link[rel='canonical']");
    canonicalRef && canonical && canonicalRef.setAttribute("href", canonical);
  }, [canonical, description, title]);
};

export default useDocumentMeta;
