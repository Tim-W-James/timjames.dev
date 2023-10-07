import cn from "@styles/cssUtils";

import BlogArticleWrapper from "./BlogArticleWrapper";

type BlogArticleLoadingProps = {
  slug?: string;
};

/**
 * Loading skeleton for a blog article
 */
const BlogArticleLoading: React.FC<BlogArticleLoadingProps> = ({ slug }) => (
  <BlogArticleWrapper slug={slug}>
    <div className={cn("mt-8 flex gap-4", "flex-col", "animate-pulse")}>
      <div className={cn("aspect-wide", "mb-8 rounded bg-slate-700")} />
      {[...Array(20).keys()].map((key) => (
        <div key={key}>
          <div className={cn("flex gap-4", "flex-row")}>
            <div
              // eslint-disable-next-line tailwindcss/no-custom-classname
              className={`basis-${(key % 3) + 1} ${cn(
                // eslint-disable-next-line sonarjs/no-duplicate-string
                "h-4 w-full min-w-1/10 rounded bg-slate-700"
              )}`}
            />
            <div
              // eslint-disable-next-line tailwindcss/no-custom-classname
              className={`basis-${(key % 6) + 1} ${cn(
                "h-4 w-full min-w-1/10 rounded bg-slate-700"
              )}`}
            />
            <div
              // eslint-disable-next-line tailwindcss/no-custom-classname
              className={`basis-${5 - ((key % 3) + (key % 6))} ${cn(
                "h-4 w-full min-w-1/10 rounded bg-slate-700"
              )}`}
            />
          </div>
          {(key + 1) % 5 === 0 ? <div className={cn("mb-8")} /> : null}
        </div>
      ))}
    </div>
  </BlogArticleWrapper>
);

export default BlogArticleLoading;
