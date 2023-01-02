import {
  DEFAULT_DESCRIPTION,
  DEFAULT_SUB_TITLE,
  PRIMARY_TITLE,
  TITLE_SEPARATOR,
} from "@constants/content";
import { useEffect, useRef } from "react";

/**
 * Set the document meta attributes
 *
 * @param {string} title - meta title
 * @param {string} description - meta description
 * @param {boolean} [prevailOnUnmount=false] - If true, the title will be set
 * even if the component is unmounted.
 */
const useDocumentMeta = (
  title?: string,
  description?: string,
  prevailOnUnmount = false
) => {
  const defaultTitle = useRef(document.title);
  const defaultDescription = useRef(
    // eslint-disable-next-line sonarjs/no-duplicate-string
    document.querySelector("meta[name='description']")?.getAttribute("content")
  );

  useEffect(() => {
    document.title = title
      ? `${title}${TITLE_SEPARATOR}${PRIMARY_TITLE}`
      : `${PRIMARY_TITLE}${TITLE_SEPARATOR}${DEFAULT_SUB_TITLE}`;
    const descriptionRef = document.querySelector("meta[name='description']");
    descriptionRef &&
      descriptionRef.setAttribute(
        "content",
        description ? description : DEFAULT_DESCRIPTION
      );
  }, [description, title]);

  useEffect(
    () => () => {
      if (!prevailOnUnmount) {
        document.title = defaultTitle.current;
        const descriptionRef = document.querySelector(
          "meta[name='description']"
        );
        defaultDescription.current &&
          descriptionRef?.setAttribute("content", defaultDescription.current);
      }
    },
    [prevailOnUnmount]
  );
};

export default useDocumentMeta;
