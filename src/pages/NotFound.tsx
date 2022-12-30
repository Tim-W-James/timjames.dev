import Button from "@components/Button";
import cn from "@styles/cssUtils";
import { BsFillHouseDoorFill } from "react-icons/bs";

const NotFound: React.FC = () => (
  <>
    <div className={cn("text-center")}>
      <h1 className={cn("text-8xl pt-10 text-light-accent font-bold")}>404</h1>
      <h2>
        <span className={cn("text-danger")}>Oops!</span> Page not found.
      </h2>
      <h3>The page you&apos;re looking for doesn&apos;t exist.</h3>
      <br />
      <div className="flex justify-center items-center">
        <Button
          icon={<BsFillHouseDoorFill />}
          isLight
          label="Return Home"
          linkIsRoute
          to="/"
          tooltip="Return to the homepage"
        />
      </div>
    </div>
  </>
);

export default NotFound;
