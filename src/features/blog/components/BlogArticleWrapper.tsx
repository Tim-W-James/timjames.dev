import Button from "@components/buttons/Button";
import cn from "@styles/cssUtils";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowUpCircleFill,
} from "react-icons/bs";
import { CgSpinner } from "react-icons/cg";

type BlogArticleWrapperProps = {
  title?: string;
  children: JSX.Element;
};

/**
 * Creates the layout for a blog article
 */
const BlogArticleWrapper: React.FC<BlogArticleWrapperProps> = ({
  title,
  children,
}) => {
  const scrollToTop = useCallback(
    () => window.scrollTo({ top: 0, behavior: "smooth" }),
    []
  );

  return (
    <>
      <div
        className={cn("fixed -z-10 -mt-5 h-screen w-screen bg-dark-shades")}
      />
      <div className={cn("container mx-auto my-10 px-8")}>
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
        {children}
        <div className={cn("mt-8 flex justify-center")}>
          <Button
            childProps={{ onClick: scrollToTop }}
            icon={<BsFillArrowUpCircleFill />}
            isLight
            label="Back to top"
            mode="button"
            tooltip="Back to top"
          />
        </div>
      </div>
    </>
  );
};

export default BlogArticleWrapper;
