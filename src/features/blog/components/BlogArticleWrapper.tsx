import cn from "@styles/cssUtils";
import { CgSpinner } from "react-icons/cg";

import BlogPostsCarousel from "./BlogPostsCarousel";

type BlogArticleWrapperProps = {
  title?: string;
  children: JSX.Element;
  slug?: string;
};

/**
 * Creates the layout for a blog article
 */
const BlogArticleWrapper: React.FC<BlogArticleWrapperProps> = ({
  title,
  children,
  slug,
}) => (
  <>
    <div className={cn("fixed -z-10 -mt-5 h-screen w-screen bg-dark-shades")} />
    <div className={cn("container mx-auto px-8 pt-10")}>
      <header
        className={cn(
          "mx-auto flex place-content-center items-center px-8 text-center",
          "flex-col"
        )}
      >
        <h1 className={cn("font-bold text-light-accent")} id={title}>
          {title ? (
            <>
              {title}
              <hr className={cn("radial-border")} />
            </>
          ) : (
            <span className={cn("inline-block", "leading-0", "animate-spin")}>
              <CgSpinner />
              <hr className={cn("hidden")} />
            </span>
          )}
        </h1>
      </header>
      {children}
    </div>
    <div className={cn("container mx-auto pt-4 text-center")}>
      <BlogPostsCarousel
        excludeSlugs={slug ? [slug] : undefined}
        title="Read More"
      />
    </div>
  </>
);

export default BlogArticleWrapper;
