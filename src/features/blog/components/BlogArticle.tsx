import Button from "@components/buttons/Button";
import useDocumentMeta from "@hooks/useDocumentMeta";
import cn from "@styles/cssUtils";
import { useQuery } from "@tanstack/react-query";
import {
  BsArrowUpCircle,
  BsChatLeftText,
  BsFillArrowLeftCircleFill,
  BsHeart,
} from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
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

  const { status, data: article } = useQuery({
    queryKey: ["devdotto", "article", slug],
    queryFn: devdottoArticle(slug),
  });

  useDocumentMeta(
    article?.title
      ? article.title
      : status === "pending"
        ? "Blog"
        : "Article Not Found",
    article?.description ? article.description : "Blog Article",
    slug
  );

  const [hasImageLoaded, setHasImageLoaded] = useState(false);

  const imageHasLoaded = useCallback(() => setHasImageLoaded(true), []);

  return status === "pending" ? (
    <BlogArticleLoading slug={slug} />
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
    <BlogArticleWrapper slug={article.slug} title={article.title || ""}>
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
              className={cn(
                // eslint-disable-next-line sonarjs/no-duplicate-string
                "hover:text-light-accent active:text-dark-accent",
                "flex items-center gap-1"
              )}
              href={article.url}
              rel="noreferrer"
              target="_blank"
              title="Like on dev.to"
            >
              <BsHeart />
              {article.public_reactions_count !== 0
                ? article.public_reactions_count
                : ""}
            </a>
            <a
              className={cn(
                "hover:text-light-accent active:text-dark-accent",
                "flex items-center gap-2"
              )}
              href={`${article.url}#comments`}
              rel="noreferrer"
              target="_blank"
              title="Comment on dev.to"
            >
              <BsChatLeftText />
              {article.comments_count !== 0 ? article.comments_count : ""}
            </a>
            <a
              className={cn(
                "hover:text-light-accent active:text-dark-accent",
                "flex items-center"
              )}
              href={`https://twitter.com/intent/tweet?text=Check%20out%20this%20post%3A%20${
                location.href.split("#")[0]
              }`}
              rel="noreferrer"
              target="_blank"
              title="Share on X (Twitter)"
            >
              <FaXTwitter />
            </a>
          </div>
          <div className={cn("text-lg")}>
            {article.reading_time_minutes} min read
          </div>
        </div>
        <MarkdownRenderer markdown={article.body_markdown} />

        <div className={cn("flex w-full justify-center")}>
          <a
            href="https://ko-fi.com/D1D4UM8D0"
            rel="noreferrer"
            target="_blank"
          >
            <img
              alt="Buy Me a Coffee at ko-fi.com"
              src="https://storage.ko-fi.com/cdn/kofi5.png?v=3"
              style={{ border: "0px", height: "36px" }}
            />
          </a>
        </div>
        <div className={cn("radial-border mt-4 flex justify-center gap-2")}>
          <a
            className={cn(
              // eslint-disable-next-line sonarjs/no-duplicate-string
              "flex items-center gap-2 hover:text-light-accent",
              "border-r",
              "pr-2",
              // eslint-disable-next-line sonarjs/no-duplicate-string
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
              "border-r",
              "pr-2",
              "active:text-dark-accent"
            )}
            href={`${article.url}#comments`}
            rel="noreferrer"
            target="_blank"
            title="Comment on dev.to"
          >
            Comment <BsChatLeftText />{" "}
            {article.comments_count !== 0 ? article.comments_count : ""}
          </a>
          <button
            className={cn(
              "flex items-center gap-2 hover:text-light-accent",
              "active:text-dark-accent"
            )}
            onClick={scrollToTop}
            title="Back to top"
            type="button"
          >
            Top
            <BsArrowUpCircle />
          </button>
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
    <BlogArticleLoading slug={slug} />
  );
};

export default BlogArticle;
