import Button from "@components/Button";
import cn from "@styles/cssUtils";
import { ClassNames } from "./NotFound.module.scss";

const NotFound: React.FC = () => (
  <div className={cn<ClassNames>()("_solidBackground")}>
    <div className={cn<ClassNames>()("_container")}>
      <h1>404</h1>
      <span className={cn<ClassNames>()("_errorHeader")}>
        <span className={cn<ClassNames>()("_danger")}>Oops!</span> Page not
        found. <br />
        <br />
      </span>
      The page you&apos;re looking for doesn&apos;t exist.
      <br />
      <br />
      <br />
      <Button label="Go Home" to="/" />
    </div>
  </div>
);

export default NotFound;
