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
}> = ({ title, content }) => (
  <>
    <div className={cn("fixed bg-dark-shades w-screen h-screen -z-10")} />
    <div className={cn("my-10 mx-auto pt-10 px-8 container")}>
      <header
        className={cn(
          "flex mx-auto items-center place-content-center px-8 text-center",
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
      {content}
      <div className={cn("flex justify-center mt-8")}>
        <Button
          icon={<BsFillArrowUpCircleFill />}
          isLight
          label={"Back to top"}
          mode="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          tooltip="Back to top"
        />
      </div>
    </div>
  </>
);

export default BlogArticleWrapper;
