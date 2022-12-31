import {
  DevdottoArticleMeta,
  devdottoArticlesMeta,
} from "@utils/devdottoArticle";
import { useEffect, useState } from "react";

/**
 * Fetch metadata for all dev.to articles
 *
 * @param onError - a callback which is invoked if the request fails
 */
const useDevdottoArticleMeta = (count?: number, onError?: () => void) => {
  const [loading, setLoading] = useState(true);
  const [articles, setArticles] = useState<Array<DevdottoArticleMeta>>([]);

  useEffect(() => {
    (async () => {
      try {
        setArticles(await devdottoArticlesMeta(count || 1));
      } catch (e) {
        onError?.();
      }

      setLoading(false);
    })();
  }, [count, onError]);

  // Return the array of articles, and the loading indicator
  return { articles, loading };
};

export default useDevdottoArticleMeta;
