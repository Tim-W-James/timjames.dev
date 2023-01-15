import Button from "@components/buttons/Button";
import cn from "@styles/cssUtils";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { HashLink } from "react-router-hash-link";
import useDevdottoArticlesMeta from "../hooks/useDevdottoArticlesMeta";
import Card from "./BlogCard";
import LoadingCard from "./BlogCardLoading";

const BlogPostsCarousel: React.FC = () => {
  const latestArticle = useDevdottoArticlesMeta(2);

  return (
    <div>
      <h2 className={cn("self-center mb-4")} id="blog">
        <HashLink
          className={cn("hash-link")}
          onClick={() =>
            navigator.clipboard.writeText(
              `${location.href.split("#")[0] || ""}#blog`
            )
          }
          to={"#blog"}
        >
          Latest Blog Posts{" "}
        </HashLink>
        <hr className={cn("radial-border")} />
      </h2>
      <section aria-labelledby="blog">
        <div className={cn("flex gap-4 p-0 mx-2 justify-center", "flex-wrap")}>
          {latestArticle.loading
            ? [...Array(2).keys()].map((key) => <LoadingCard key={key} />)
            : latestArticle.articles.map((articleMeta, index) => (
                <Card article={articleMeta} key={index} />
              ))}
        </div>
        <div className={cn("flex justify-center mt-8")}>
          <Button
            icon={<BsFillArrowRightCircleFill />}
            iconRight
            isLight
            label={"More Articles"}
            mode="route"
            to="/blog"
            tooltip="View more articles"
          />
        </div>
      </section>
    </div>
  );
};

export default BlogPostsCarousel;
