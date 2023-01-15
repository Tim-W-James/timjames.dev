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

interface DevdottoArticle extends DevdottoArticleMeta {
  body_html: string;
  body_markdown: string;
}

export default DevdottoArticle;
