import Button from "@components/buttons/Button";
import cn, { cnScoped } from "@styles/cssUtils";
import { useQuery } from "@tanstack/react-query";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { MdArticle } from "react-icons/md";
import { HashLink } from "react-router-hash-link";
import { devdottoArticlesMeta } from "../services/devdottoArticle";
import { sortByLatest } from "../utils/sortFuncs";
import BlogCard from "./BlogCard";
import BlogCardLoading from "./BlogCardLoading";
import styles from "./BlogPostsCarousel.module.scss";

const articlesToDisplay = 30;

const BlogPostsCarousel: React.FC = () => {
  const { status, data: latestArticles } = useQuery(
    ["devdotto", "articlesMeta", articlesToDisplay, 1],
    devdottoArticlesMeta(articlesToDisplay)
  );

  const goNext = useCallback(() => {
    document.getElementById("carousel")?.scrollBy({
      left: 384,
      behavior: "smooth",
    });
  }, []);

  const goPrev = useCallback(() => {
    document.getElementById("carousel")?.scrollBy({
      left: -384,
      behavior: "smooth",
    });
  }, []);

  const copyFragment = useCallback(
    () =>
      navigator.clipboard.writeText(
        `${location.href.split("#")[0] || ""}#blog`
      ),
    []
  );

  return (
    <div>
      <h2 className={cn("self-center mb-4")} id="blog">
        <HashLink className={cn("hash-link")} onClick={copyFragment} to="#blog">
          Latest Blog Posts{" "}
        </HashLink>
        <hr className={cn("radial-border")} />
      </h2>
      <section aria-labelledby="blog">
        <div
          className={cnScoped(styles)(
            "p-0 pb-4 mx-2",
            "px-1/10",
            "max-sm:px-1",
            "overflow-auto snap-x",
            "flex gap-4",
            styles._carousel
          )}
          data-chromatic="ignore"
          id="carousel"
        >
          {status === "loading" ? (
            [...Array(4).keys()].map((key) => (
              <BlogCardLoading isCarouselItem key={key} />
            ))
          ) : status === "error" ? (
            <div className={cn("text-center mb-8 text-xl")}>
              <span className={cn("text-danger")}>Something went wrong</span> -
              Try again later
            </div>
          ) : (
            latestArticles
              .sort(sortByLatest)
              .map((articleMeta, index) => (
                <BlogCard article={articleMeta} isCarouselItem key={index} />
              ))
          )}
        </div>
        <div
          className={cn("flex mt-8 gap-4 justify-center items-center mx-auto")}
        >
          <Button
            icon={<BsFillArrowLeftCircleFill />}
            isLabelHidden
            isLight
            label="Scroll carousel left"
            mode="button"
            onClick={goPrev}
            tooltip="Scroll carousel left"
          />
          <Button
            icon={<MdArticle />}
            iconRight
            isLight
            label="View All"
            mode="route"
            to="/blog?reset"
            tooltip="View more articles"
          />
          <Button
            icon={<BsFillArrowRightCircleFill />}
            isLabelHidden
            isLight
            label="Scroll carousel right"
            mode="button"
            onClick={goNext}
            tooltip="Scroll carousel right"
          />
        </div>
      </section>
    </div>
  );
};

export default BlogPostsCarousel;
