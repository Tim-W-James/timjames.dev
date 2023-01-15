import DevdottoArticle, { DevdottoArticleMeta } from "../types/devdottoArticle";

// Setup API endpoints and queries
const DEV_DOT_TO_USERNAME = "timwjames";
const ARTICLES_API = "https://dev.to/api/articles";

// Helper method to type responses
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const parseResponse = <T>(response: any): T =>
  (typeof response === "string" ? JSON.parse(response) : response) as T;

/**
 * Get all articles from dev.to
 *
 */
export const devdottoArticlesMeta = (articles: number) => async () =>
  parseResponse<Array<DevdottoArticleMeta>>(
    (
      await fetch(
        ARTICLES_API +
          "?" +
          new URLSearchParams({
            username: DEV_DOT_TO_USERNAME,
            per_page: String(articles),
          })
      )
    ).json()
  );

/**
 * Get a single dev.to article
 *
 * @param {string} slug - URL slug (title) for the article
 */
const devdottoArticle = (slug: string) => async () =>
  parseResponse<DevdottoArticle>(
    (await fetch(`${ARTICLES_API}/${DEV_DOT_TO_USERNAME}/${slug}`)).json()
  );

export default devdottoArticle;