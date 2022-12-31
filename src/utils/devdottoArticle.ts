// Adapted from: https://dev.to/matjones/how-to-embed-your-dev-to-blog-in-your-personal-website-4l81

export interface DevdottoArticleMeta {
  type_of: string;
  id: number;
  title: string;
  description: string;
  readable_publish_date: string;
  slug: string;
  path: string;
  url: string;
  reading_time_minutes: number;
  comments_count: number;
  public_reactions_count: number;
  positive_reactions_count: number;
  collection_id?: number | null;
  published_timestamp: string;
  cover_image: string;
  social_image: string;
  tag_list: Array<string>;
}

export interface DevdottoArticle extends DevdottoArticleMeta {
  body_html: string;
  body_markdown: string;
}

// Setup API endpoints and queries
const DEV_DOT_TO_USERNAME = "timwjames"; // Swap this for your username
const ARTICLES_API = "https://dev.to/api/articles";

// Helper method to type responses
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const parseResponse = <T>(response: any): T =>
  (typeof response === "string" ? JSON.parse(response) : response) as T;

/**
 * Get all articles from dev.to
 *
 */
export const devdottoArticlesMeta = async (articles: number) =>
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
const devdottoArticle = async (slug: string) =>
  parseResponse<DevdottoArticle>(
    (await fetch(`${ARTICLES_API}/${DEV_DOT_TO_USERNAME}/${slug}`)).json()
  );

export default devdottoArticle;
