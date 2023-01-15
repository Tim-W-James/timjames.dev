import { useEffect, useState } from "react";
import devdottoArticle from "../services/devdottoArticle";
import DevdottoArticle from "../types/devdottoArticle";

/**
 * Get a specific article
 *
 * @param slug - the slug (title) of the article to retrieve
 * @param onError - a callback which is invoked if the request fails
 */
export default (slug: string, onError?: () => void) => {
  const [loading, setLoading] = useState(true);
  const [article, setArticle] = useState<DevdottoArticle>();

  useEffect(() => {
    (async () => {
      try {
        setArticle(await devdottoArticle(slug));
      } catch (e) {
        onError?.();
      }

      setLoading(false);
    })();
  }, [onError, slug]);
  return { article, loading };
};
