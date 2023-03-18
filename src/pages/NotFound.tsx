import Button from "@components/buttons/Button";
import cn from "@styles/cssUtils";
import { BsFillHouseDoorFill } from "react-icons/bs";

const NotFound: React.FC = () => (
  <>
    <div className={cn("fixed w-screen h-screen bg-dark-shades -z-10")} />
    <div className={cn("text-center  mt-8")}>
      <h1 className={cn("text-8xl pt-10 text-light-accent font-bold")} id="404">
        404
      </h1>
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
          mode="route"
          to="/"
          tooltip="Return to the homepage"
        />
      </div>
    </div>
  </>
);

export default NotFound;
