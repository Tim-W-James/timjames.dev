import Button from "@components/Button";
import styles from "./NotFound.module.scss";

const NotFound: React.FC = () => (
  <div className={styles.solidBackground}>
    <div className={styles.container}>
      <h1>404</h1>
      <span className={styles.errorHeader}>
        <span className={styles.danger}>Oops!</span> Page not found. <br />
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
