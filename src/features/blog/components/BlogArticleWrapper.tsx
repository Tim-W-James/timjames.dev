import Button from "@components/buttons/Button";
import cn from "@styles/cssUtils";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowUpCircleFill,
} from "react-icons/bs";
import { CgSpinner } from "react-icons/cg";

const BlogArticleWrapper: React.FC<{
  title?: string;
  content: JSX.Element;
}> = ({ title, content }) => {
  const scrollToTop = useCallback(
    () => window.scrollTo({ top: 0, behavior: "smooth" }),
    []
  );

  return (
    <>
      <div className={cn("bg-dark-shades fixed -z-10 h-screen w-screen")} />
      <div className={cn("container my-10 mx-auto px-8 pt-10")}>
        <header
          className={cn(
            "mx-auto flex place-content-center items-center px-8 text-center",
            "flex-col"
          )}
        >
          <h1 className={cn("text-light-accent font-bold")} id={title}>
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
        {content}
        <div className={cn("mt-8 flex justify-center")}>
          <Button
            icon={<BsFillArrowUpCircleFill />}
            isLight
            label="Back to top"
            mode="button"
            onClick={scrollToTop}
            tooltip="Back to top"
          />
        </div>
      </div>
    </>
  );
};

export default BlogArticleWrapper;
