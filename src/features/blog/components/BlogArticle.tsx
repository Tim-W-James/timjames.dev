import useDocumentMeta from "@hooks/useDocumentMeta";
import cn from "@styles/cssUtils";
import { BsChatLeftTextFill, BsHeart } from "react-icons/bs";
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";
import useDevdottoArticle from "../hooks/useDevdottoArticle";
import BlogArticleLoading from "./BlogArticleLoading";
import BlogArticleWrapper from "./BlogArticleWrapper";

const BlogArticleContent: React.FC<{ slug: string }> = ({ slug }) => {
  const rawArticle = useDevdottoArticle(slug);
  useDocumentMeta(
    rawArticle.loading ? "Blog" : rawArticle.article?.title || "Blog",
    rawArticle.loading || !rawArticle.article
      ? "Blog Article"
      : rawArticle.article.description
  );

  return !rawArticle.loading && rawArticle.article ? (
    <BlogArticleWrapper
      content={
        <div className={cn("flex mx-auto", "flex-col")}>
          <div className={cn("text-right text-lg mr-4")}>
            {new Date(
              rawArticle.article.published_timestamp
            ).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </div>
          <img
            alt="Blog cover"
            className={cn("mb-0 border", "rounded-xl", "border-light-accent")}
            src={rawArticle.article.cover_image}
          />
          <div
            className={cn("flex gap-4 justify-between mx-4 mb-8", "flex-wrap")}
          >
            <div className={cn("flex gap-4 mt-4 text-xl", "flex-wrap")}>
              <a
                className={cn(
                  "hover:text-light-accent active:text-dark-accent"
                )}
                href={rawArticle.article.url}
                rel="noreferrer"
                target="_blank"
                title={"Like on dev.to"}
              >
                <BsHeart />{" "}
                {rawArticle.article.public_reactions_count !== 0
                  ? rawArticle.article.public_reactions_count
                  : ""}
              </a>
              <a
                className={cn(
                  "hover:text-light-accent active:text-dark-accent"
                )}
                href={rawArticle.article.url}
                rel="noreferrer"
                target="_blank"
                title={"Comment on dev.to"}
              >
                <BsChatLeftTextFill />{" "}
                {rawArticle.article.comments_count !== 0
                  ? rawArticle.article.comments_count
                  : ""}
              </a>
            </div>
            <div className={cn("text-lg")}>
              {rawArticle.article.reading_time_minutes} min read
            </div>
          </div>
          <article className={cn("prose", "prose-invert", "prose-lg")}>
            <ReactMarkdown>
              {rawArticle.article.body_markdown || ""}
            </ReactMarkdown>
          </article>
        </div>
      }
      title={rawArticle.article.title || ""}
    />
  ) : (
    <BlogArticleLoading />
  );
};

const BlogArticle: React.FC = () => {
  const { slug } = useParams();

  return slug ? <BlogArticleContent slug={slug} /> : <BlogArticleLoading />;
};

export default BlogArticle;
