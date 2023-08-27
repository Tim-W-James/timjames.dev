import DevdottoArticle, {
  DevdottoArticleMeta,
  devdottoArticleSchema,
  devdottoArticlesMetaSchema,
} from "../types/devdottoArticle";

// Setup API endpoints and queries
const DEV_DOT_TO_USERNAME = "timwjames";
const ARTICLES_API = "https://dev.to/api/articles";

// Helper method to type responses=
const parseResponse = (response: unknown): unknown =>
  typeof response === "string" ? JSON.parse(response) : response;

/**
 * Get all articles from dev.to
 *
 */
export const devdottoArticlesMeta =
  (
    articles: number,
    page?: number
  ): (() => Promise<DevdottoArticleMeta[] | undefined>) =>
  async () => {
    try {
      // eslint-disable-next-line max-len
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      const articlesMetaEndpoint = `${ARTICLES_API}?${new URLSearchParams({
        username: DEV_DOT_TO_USERNAME,
        per_page: String(articles),
        page: String(page ?? 1),
      })}`;
      const articleMeta = await parseResponse(
        (await fetch(articlesMetaEndpoint)).json()
      );
      const validatedArticleMeta =
        devdottoArticlesMetaSchema.safeParse(articleMeta);
      if (!validatedArticleMeta.success) {
        console.error(
          `Failed to validate response from [${articlesMetaEndpoint}]`,
          {
            cause: validatedArticleMeta.error,
          }
        );
        return undefined;
      }
      return validatedArticleMeta.data;
    } catch (error) {
      // In case JSON parse fails
      console.error(`Failed to parse article meta`, { cause: error });
      return undefined;
    }
  };

/**
 * Get a single dev.to article
 *
 * @param slug URL slug (title) for the article
 */
const devdottoArticle =
  (slug: string): (() => Promise<DevdottoArticle | undefined>) =>
  async () => {
    try {
      const articleEndpoint = `${ARTICLES_API}/${DEV_DOT_TO_USERNAME}/${slug}`;
      const article = await parseResponse(
        (await fetch(articleEndpoint)).json()
      );
      const validatedArticle = devdottoArticleSchema.safeParse(article);
      if (!validatedArticle.success) {
        console.error(`Failed to validate response from [${articleEndpoint}]`, {
          cause: validatedArticle.error,
        });
        return undefined;
      }
      return validatedArticle.data;
    } catch (error) {
      // In case JSON parse fails
      console.error(`Failed to parse article [${slug}]`, { cause: error });
      return undefined;
    }
  };

export default devdottoArticle;
