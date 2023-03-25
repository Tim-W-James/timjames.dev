import cn from "@styles/cssUtils";
import { BsChatLeftTextFill, BsHeart } from "react-icons/bs";
import { Link } from "react-router-dom";

import { DevdottoArticleMeta } from "../types/devdottoArticle";

const Card: React.FC<{
  article: DevdottoArticleMeta;
  isCarouselItem?: boolean;
}> = ({ article, isCarouselItem }) => {
  const [hasImageLoaded, setHasImageLoaded] = useState(false);
  const imageHasLoaded = useCallback(() => setHasImageLoaded(true), []);
  return (
    <section
      aria-label={article.title}
      className={cn(
        "border p-4",
        "border-dark-accent",
        "acrylic-light",
        "rounded-lg",
        isCarouselItem ? "min-w-sm snap-center" : "w-full max-w-sm"
      )}
    >
      <div className={cn("flex gap-4", "flex-col")}>
        <Link to={`/blog/${article.slug}`}>
          <img
            alt="Thumbnail"
            className={cn(
              "border",
              "rounded-lg",
              "border-dark-accent",
              "aspect-wide",
              "text-center",
              { "animate-pulse bg-slate-700": !hasImageLoaded }
            )}
            height={175}
            onLoad={imageHasLoaded}
            src={article.social_image}
            width={350}
          />
          <div className={cn("mr-2 text-right")}>
            {new Date(article.published_timestamp).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </div>
        </Link>
        <div>
          <Link
            aria-labelledby={article.title}
            title="Read blog"
            to={`/blog/${article.slug}`}
          >
            <h3
              className={cn("text-light-accent mb-0 text-center font-bold")}
              id={article.title}
            >
              {article.title}
            </h3>
          </Link>
          <hr className={cn("radial-border")} />
        </div>
        <div className={cn("flex justify-center gap-2", "flex-wrap")}>
          {article.tag_list.map((tag, index) => (
            <div
              className={cn("bg-main-brand px-2 font-bold", "rounded-md")}
              key={index}
            >
              {tag}
            </div>
          ))}
        </div>
        <div className={cn("mx-2 flex justify-between gap-4", "flex-wrap")}>
          <div className={cn("flex gap-4 text-xl", "flex-wrap")}>
            <a
              className={cn("hover:text-light-accent active:text-dark-accent")}
              href={article.url}
              rel="noreferrer"
              target="_blank"
              title="Like on dev.to"
            >
              <BsHeart />{" "}
              {article.public_reactions_count > 0
                ? article.public_reactions_count
                : ""}
            </a>
            <a
              className={cn("hover:text-light-accent active:text-dark-accent")}
              href={article.url}
              rel="noreferrer"
              target="_blank"
              title="Comment on dev.to"
            >
              <BsChatLeftTextFill />{" "}
              {article.comments_count > 0 ? article.comments_count : ""}
            </a>
          </div>
          <Link to={`/blog/${article.slug}`}>
            <div>{article.reading_time_minutes} min read</div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Card;
