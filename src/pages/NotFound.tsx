import Button from "@components/Button";
import cn from "@styles/cssUtils";
import { HiOutlineArrowSmRight } from "react-icons/hi";

const NotFound: React.FC = () => (
  <>
    <div className={cn()("text-center")}>
      <h1 className={cn()("text-8xl pt-10")}>404</h1>
      <h2>
        <span className={cn()("text-danger")}>Oops!</span> Page not found.
      </h2>
      <h3>The page you&apos;re looking for doesn&apos;t exist.</h3>
      <br />
      <div className="flex justify-center items-center">
        <Button
          icon={<HiOutlineArrowSmRight />}
          isLight
          label="Go Home"
          linkIsRoute
          to="/"
        />
      </div>
    </div>
  </>
);

export default NotFound;
