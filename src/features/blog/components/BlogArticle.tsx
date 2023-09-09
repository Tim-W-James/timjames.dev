import Button from "@components/buttons/Button";
import useDocumentMeta from "@hooks/useDocumentMeta";
import cn from "@styles/cssUtils";
import { useQuery } from "@tanstack/react-query";
import {
  BsChatLeftTextFill,
  BsFillArrowLeftCircleFill,
  BsFillArrowUpCircleFill,
  BsHeart,
} from "react-icons/bs";
import { useParams } from "react-router-dom";
import escape from "validator/lib/escape";

import devdottoArticle from "../services/devdottoArticle";
import BlogArticleLoading from "./BlogArticleLoading";
import BlogArticleWrapper from "./BlogArticleWrapper";
import MarkdownRenderer from "./MarkdownRenderer";

type BlogArticleContentProps = { slug: string };

// eslint-disable-next-line sonarjs/cognitive-complexity
const BlogArticleContent: React.FC<BlogArticleContentProps> = ({ slug }) => {
  const scrollToTop = useCallback(
    () => window.scrollTo({ top: 0, behavior: "smooth" }),
    []
  );

  const { status, data: article } = useQuery(
    ["devdotto", "article", slug],
    devdottoArticle(slug)
  );

  useDocumentMeta(
    article?.title
      ? article.title
      : status === "loading"
      ? "Blog"
      : "Article Not Found",
    article?.description ? article.description : "Blog Article",
    slug
  );

  const [hasImageLoaded, setHasImageLoaded] = useState(false);

  const imageHasLoaded = useCallback(() => setHasImageLoaded(true), []);

  return status === "loading" ? (
    <BlogArticleLoading />
  ) : status === "error" || !article?.title ? (
    <>
      <div
        className={cn("fixed -z-10 -mt-5  h-screen w-screen bg-dark-shades")}
      />
      <div className={cn("container mx-auto my-10 px-8")}>
        <header
          className={cn(
            "mx-auto flex place-content-center items-center px-8 text-center",
            "flex-col"
          )}
        >
          <h1 className={cn("text-8xl font-bold text-light-accent")} id="error">
            Error
          </h1>
          <h2>
            <span className={cn("text-danger")}>Oops!</span> Article not found.
          </h2>
        </header>
        <div className={cn("mb-8 flex justify-center")}>
          <Button
            icon={<BsFillArrowLeftCircleFill />}
            isLight
            label="Article List"
            mode="route"
            to="/blog"
            tooltip="Back to article list"
          />
        </div>
      </div>
    </>
  ) : (
    <BlogArticleWrapper title={article.title || ""}>
      <div className={cn("mx-auto flex", "flex-col")}>
        <div className={cn("mr-4 text-right text-lg")}>
          {new Date(article.published_timestamp).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </div>
        <img
          alt="Blog cover"
          className={cn(
            "mb-0 border",
            "rounded-xl",
            "border-light-accent",
            "text-center",
            {
              "aspect-wide bg-slate-700 rounded mb-8 animate-pulse":
                !hasImageLoaded,
            }
          )}
          onLoad={imageHasLoaded}
          src={article.cover_image}
        />
        <div
          className={cn("mx-4 mb-8 flex justify-between gap-4", "flex-wrap")}
        >
          <div className={cn("flex gap-4 text-xl", "flex-wrap")}>
            <a
              className={cn("hover:text-light-accent active:text-dark-accent")}
              href={article.url}
              rel="noreferrer"
              target="_blank"
              title="Like on dev.to"
            >
              <BsHeart />{" "}
              {article.public_reactions_count !== 0
                ? article.public_reactions_count
                : ""}
            </a>
            <a
              className={cn("hover:text-light-accent active:text-dark-accent")}
              href={`${article.url}#comments`}
              rel="noreferrer"
              target="_blank"
              title="Comment on dev.to"
            >
              <BsChatLeftTextFill />{" "}
              {article.comments_count !== 0 ? article.comments_count : ""}
            </a>
          </div>
          <div className={cn("text-lg")}>
            {article.reading_time_minutes} min read
          </div>
        </div>
        <MarkdownRenderer markdown={article.body_markdown} />

        <div className={cn("radial-border mt-4 flex justify-center gap-2")}>
          <a
            className={cn(
              "flex items-center gap-2 hover:text-light-accent",
              "border-r",
              "pr-2",
              "active:text-dark-accent"
            )}
            href={article.url}
            rel="noreferrer"
            target="_blank"
            title="Like on dev.to"
          >
            Like <BsHeart />{" "}
            {article.public_reactions_count !== 0
              ? article.public_reactions_count
              : ""}
          </a>
          <a
            className={cn(
              "flex items-center gap-2 hover:text-light-accent",
              "active:text-dark-accent"
            )}
            href={`${article.url}#comments`}
            rel="noreferrer"
            target="_blank"
            title="Comment on dev.to"
          >
            Comment <BsChatLeftTextFill />{" "}
            {article.comments_count !== 0 ? article.comments_count : ""}
          </a>
        </div>
        <div className={cn("mt-4 flex justify-center")}>
          <Button
            childProps={{ onClick: scrollToTop }}
            className={cn("!px-4 !py-1")}
            icon={<BsFillArrowUpCircleFill />}
            isLight
            label="Top"
            mode="button"
            tooltip="Back to top"
          />
        </div>
      </div>
    </BlogArticleWrapper>
  );
};

/**
 * Displays the blog article defined by the slug in the URL
 */
const BlogArticle: React.FC = () => {
  const { slug } = useParams();

  return slug ? (
    <BlogArticleContent slug={escape(slug)} />
  ) : (
    <BlogArticleLoading />
  );
};

export default BlogArticle;
