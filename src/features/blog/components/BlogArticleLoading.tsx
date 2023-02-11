import cn from "@styles/cssUtils";
import BlogArticleWrapper from "./BlogArticleWrapper";

const BlogArticleLoading = () => (
  <BlogArticleWrapper
    content={
      <div className={cn("flex gap-4", "flex-col", "animate-pulse")}>
        <div className={cn("aspect-wide", "bg-slate-700 rounded mb-8")} />
        {[...Array(20).keys()].map((key) => (
          <div key={key}>
            <div className={cn("flex gap-4", "flex-row")}>
              <div
                className={
                  `basis-${(key % 3) + 1} ` +
                  cn(
                    // eslint-disable-next-line sonarjs/no-duplicate-string
                    "h-4 bg-slate-700 rounded w-full min-w-1/10"
                  )
                }
              />
              <div
                className={
                  `basis-${(key % 6) + 1} ` +
                  cn("h-4 bg-slate-700 rounded w-full min-w-1/10")
                }
              />
              <div
                className={
                  `basis-${5 - ((key % 3) + (key % 6))} ` +
                  cn("h-4 bg-slate-700 rounded w-full min-w-1/10")
                }
              />
            </div>
            {(key + 1) % 5 === 0 ? <div className={cn("mb-8")} /> : null}
          </div>
        ))}
      </div>
    }
  />
);

export default BlogArticleLoading;
