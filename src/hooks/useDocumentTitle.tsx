import { useEffect, useRef } from "react";

/**
 * Set the document title.
 *
 * @param {string} title The title to set.
 * @param {boolean} [prevailOnUnmount=false] If true, the title will be set even if the component is unmounted.
 */
const useDocumentTitle = (title: string, prevailOnUnmount = false) => {
  const defaultTitle = useRef(document.title);

  useEffect(() => {
    document.title = title;
  }, [title]);

  useEffect(
    () => () => {
      if (!prevailOnUnmount) {
        document.title = defaultTitle.current;
      }
    },
    [prevailOnUnmount]
  );
};

export default useDocumentTitle;
