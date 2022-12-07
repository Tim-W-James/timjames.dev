import Button from "@components/Button";
import styles from "./NotFound.module.scss";

const NotFound: React.FC = () => (
  <div className={styles.solidBackground}>
    <h1 className={styles.notFound}>
      404
      <br />
      <br />
      Oops! Page not found. <br />
      The page you&apos;re looking for doesn&apos;t exist.
      <br />
      <br />
      <Button label="Go Home" to="/" />
    </h1>
  </div>
);

export default NotFound;
