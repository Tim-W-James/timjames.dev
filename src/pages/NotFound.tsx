import Button from "@components/buttons/Button";
import cn from "@styles/cssUtils";
import { BsFillHouseDoorFill } from "react-icons/bs";

const NotFound: React.FC = () => (
  <>
    <div className={cn("fixed -z-10 -mt-5 h-screen w-screen bg-dark-shades")} />
    <div className={cn("mt-8  text-center")}>
      <h1 className={cn("text-8xl font-bold text-light-accent")} id="404">
        404
      </h1>
      <h2>
        <span className={cn("text-danger")}>Oops!</span> Page not found.
      </h2>
      <h3>The page you&apos;re looking for doesn&apos;t exist.</h3>
      <br />
      <div className="flex items-center justify-center">
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
