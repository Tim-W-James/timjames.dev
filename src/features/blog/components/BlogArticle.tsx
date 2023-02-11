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

  return status === "loading" ? (
    <BlogArticleLoading />
  ) : status === "error" || !article.title ? (
    <>
      <div className={cn("fixed bg-dark-shades w-screen h-screen -z-10")} />
      <div className={cn("my-10 mx-auto pt-10 px-8 container")}>
        <header
          className={cn(
            "flex mx-auto items-center place-content-center px-8 text-center",
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
        <div className={cn("flex justify-center mb-8")}>
          <Button
            icon={<BsFillArrowLeftCircleFill />}
            isLight
            label={"Find More Articles"}
            mode={"route"}
            to="/blog"
            tooltip="Back to article list"
          />
        </div>
      </div>
    </>
  ) : (
    <BlogArticleWrapper
      content={
        <div className={cn("flex mx-auto", "flex-col")}>
          <div className={cn("text-right text-lg mr-4")}>
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
            onLoad={() => setHasImageLoaded(true)}
            src={article.cover_image}
          />
          <div
            className={cn("flex gap-4 justify-between mx-4 mb-8", "flex-wrap")}
          >
            <div className={cn("flex gap-4 mt-4 text-xl", "flex-wrap")}>
              <a
                className={cn(
                  "hover:text-light-accent active:text-dark-accent"
                )}
                href={article.url}
                rel="noreferrer"
                target="_blank"
                title={"Like on dev.to"}
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
                title={"Comment on dev.to"}
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
