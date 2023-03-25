import Button from "@components/buttons/Button";
import useDocumentMeta from "@hooks/useDocumentMeta";
import cn from "@styles/cssUtils";
import { useQuery } from "@tanstack/react-query";
import {
  BsChatLeftTextFill,
  BsFillArrowLeftCircleFill,
  BsHeart,
} from "react-icons/bs";
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";
import escape from "validator/lib/escape";
import devdottoArticle from "../services/devdottoArticle";
import BlogArticleLoading from "./BlogArticleLoading";
import BlogArticleWrapper from "./BlogArticleWrapper";

const BlogArticleContent: React.FC<{ slug: string }> = ({ slug }) => {
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
  ) : status === "error" || !article.title ? (
    <>
      <div className={cn("bg-dark-shades fixed -z-10 h-screen w-screen")} />
      <div className={cn("container my-10 mx-auto px-8 pt-10")}>
        <header
          className={cn(
            "mx-auto flex place-content-center items-center px-8 text-center",
            "flex-col"
          )}
        >
          <h1 className={cn("text-light-accent font-bold")} id="Blog Not Found">
            <>
              Article Not Found
              <hr className={cn("radial-border")} />
            </>
          </h1>
        </header>
        <div className={cn("mb-8 flex justify-center")}>
          <Button
            icon={<BsFillArrowLeftCircleFill />}
            isLight
            label="Find More Articles"
            mode="route"
            to="/blog"
            tooltip="Back to article list"
          />
        </div>
      </div>
    </>
  ) : (
    <BlogArticleWrapper
      content={
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
            <div className={cn("mt-4 flex gap-4 text-xl", "flex-wrap")}>
              <a
                className={cn(
                  "hover:text-light-accent active:text-dark-accent"
                )}
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
                className={cn(
                  "hover:text-light-accent active:text-dark-accent"
                )}
                href={article.url}
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
          <article className={cn("prose", "prose-invert", "prose-lg")}>
            <ReactMarkdown>{article.body_markdown || ""}</ReactMarkdown>
          </article>
        </div>
      }
      title={article.title || ""}
    />
  );
};

const BlogArticle: React.FC = () => {
  const { slug } = useParams();

  return slug ? (
    <BlogArticleContent slug={escape(slug)} />
  ) : (
    <BlogArticleLoading />
  );
};

export default BlogArticle;
