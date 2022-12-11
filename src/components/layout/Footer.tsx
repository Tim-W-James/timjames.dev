import styles from "./Footer.module.scss";

const Footer: React.FC = () => (
  <footer className={styles.footer} id="footer">
    <span>© {new Date().getFullYear()} Tim James</span>
  </footer>
);

export default Footer;
